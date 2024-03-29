import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs'
import { User } from 'src/users/users.model';
//Сервисы авторизации
@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService,
        private readonly jwtService: JwtService){}
    //Логин
    async login(dto: CreateUserDto) {
        const user = await this.validateUser(dto)
        return this.generateToken(user)
    }
    //Регистрация
    async registration(dto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(dto.email)
        if(candidate){
            throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(dto.password, 5)
        const user = await this.userService.createUser({...dto, password: hashPassword})
        return this.generateToken(user)
    }
    //Генерация токена авторизации
    private async generateToken(user: User){
        const payload = {
            email: user.email,
            id: user.id,
            roles: user.roles
        }
        return {
            token: this.jwtService.sign(payload)
        }
    }
    //Проверка пользователя при логине
    private async validateUser(dto: CreateUserDto){
        const user = await this.userService.getUserByEmail(dto.email)
        const passwordEquals = await bcrypt.compare(dto.password, user.password)
        if(user && passwordEquals){
            return user
        }
        throw new UnauthorizedException({message: 'Неверный логин или пароль'})
    }
}
