import { ApiProperty } from '@nestjs/swagger'

//Передаваемые данные для бана пользователя
export class BanUserDto {
    @ApiProperty({ example: '1', description: 'Идентификатор пользователя' })
    readonly userId: number
    @ApiProperty({ example: 'Спам', description: 'Причина бана' })
    readonly banReason: string
}