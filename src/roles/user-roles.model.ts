import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model, BelongsToMany, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { Role } from './roles.model';
//Таблица для связи пользователей и постов (много ко многим)
@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles>{

    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    @ApiProperty({ example: '4', description: 'Идентификатор роли' })
    @ForeignKey(() => Role)
    @Column({ type: DataType.INTEGER})
    roleId: number

    @ApiProperty({ example: '2', description: 'Идентификатор пользователя' })
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER})
    userId: number
}