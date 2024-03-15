import { ApiProperty } from '@nestjs/swagger'

//Передаваемые данные для создания роли
export class CreateRoleDto{
    @ApiProperty({ example: 'USER', description: 'Название роли' })
    readonly value: string
    @ApiProperty({ example: 'Стандартный пользователь', description: 'Описание роли, для чего она нужна' })
    readonly description: string
}