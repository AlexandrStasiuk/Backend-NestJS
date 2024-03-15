import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
//Контроллер для работы с ролями
@ApiTags('Роли')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}
  //Создание роли
  @ApiOperation({ summary: 'Создание роли' })
  @Post()
  create(@Body() dto: CreateRoleDto){
    return this.rolesService.createRole(dto)
  }
  //Получение роли по значению
  @ApiOperation({ summary: 'Получение роли по значению' })
  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.rolesService.getRoleByValue(value)
  }
}
