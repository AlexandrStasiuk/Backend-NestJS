import { Body, Controller, Post, Get, UseGuards, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { ValidationPipe } from 'src/pipes/validation.pipe';
//Контроллер для работы с пользователями
@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }
    //Создание пользователя
    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: User})
    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto)
    }
    //Получение всех пользователей админом
    @ApiOperation({ summary: 'Получить всех пользователей' })
    @ApiResponse({ status: 200, type: [User] })
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get()
    getAll(){
        return this.userService.getAllUsers()
    }
    //Добавление роли пользователю админом
    @ApiOperation({ summary: 'Выдать роль' })
    @ApiResponse({ status: 200})
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body() dto: AddRoleDto) {
        return this.userService.addRole(dto)
    }
    //Бан пользователя админом
    @ApiOperation({ summary: 'Забанить пользователя' })
    @ApiResponse({ status: 200 })
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post('/role')
    ban(@Body() dto: BanUserDto) {
        return this.userService.ban(dto)
    }
}
