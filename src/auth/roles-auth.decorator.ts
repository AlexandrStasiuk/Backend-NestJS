import { SetMetadata } from '@nestjs/common'

export const ROLES_KEY = 'roles'
//Декоратор для ограничения по ролям
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles)