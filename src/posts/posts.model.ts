import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/users/users.model';

interface PostCreationAttrs {
    title: string
    content: string
    userId: number
    image: string
}
//Модель для поста в базе данных
@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs>{

    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    @ApiProperty({ example: 'Биография', description: 'Название поста' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    title: string

    @ApiProperty({ example: 'Биография обо мне', description: 'Текстовый контент поста' })
    @Column({ type: DataType.STRING, allowNull: false })
    content: string

    @ApiProperty({ example: 'qweq-afss-qwed-sagsd.jpg', description: 'Картинка для поста' })
    @Column({ type: DataType.STRING })
    image: string

    @ApiProperty({ example: '1', description: 'Идентификатор пользователя' })
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number

    @BelongsTo(() => User)
    author: User
}