import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';
//Сервисы для работы с ролями
@Injectable()
export class RolesService {

    constructor(@InjectModel(Role) private roleRepository: typeof Role){}
    //Создание роли
    async createRole(dto: CreateRoleDto){
        const role = await this.roleRepository.create(dto)
        return role
    }
    //Получение роли по значению
    async getRoleByValue(value: string) {
        const role = await this.roleRepository.findOne({where: {value}})
        return role
    }
}
