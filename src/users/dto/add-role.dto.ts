import { ApiProperty } from '@nestjs/swagger'

//Передаваемые данные для добавления роли
export class AddRoleDto{
    @ApiProperty({ example: 'ADMIN', description: 'Значение роли' })
    readonly value: string
    @ApiProperty({ example: '1', description: 'Идентификатор пользователя' })
    readonly userId: number
}