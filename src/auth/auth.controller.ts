import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
//Контроллер для авторизации
@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  //Логин
  @ApiOperation({ summary: 'Вход в аккаунт' })
  @Post('/login')
  login(@Body() dto: CreateUserDto){
    return this.authService.login(dto)
  }
  //Регистрация
  @ApiOperation({ summary: 'Регистрация аккаунта' })
  @Post('/registration')
  registration(@Body() dto: CreateUserDto) {
    return this.authService.registration(dto)
  }
}
