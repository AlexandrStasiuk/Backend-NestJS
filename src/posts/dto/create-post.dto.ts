import { ApiProperty } from '@nestjs/swagger'

//Передаваемые данные для создания поста
export class CreatePostDto{
    @ApiProperty({ example: 'Биография', description: 'Название поста' })
    readonly title: string
    @ApiProperty({ example: 'Биография обо мне', description: 'Текстовый контент поста' })
    readonly content: string
    @ApiProperty({ example: '1', description: 'Идентификатор пользователя' })
    readonly userId: number
}