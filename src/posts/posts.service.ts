import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './posts.model';
import { FilesService } from 'src/files/files.service';
//Сервисы для постов
@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private readonly postRepository: typeof Post,
        private readonly fileService: FilesService) { }
    //Создание поста
    async create(dto: CreatePostDto, image: any) {
        const fileName = await this.fileService.createFile(image)
        const post = await this.postRepository.create({ ...dto, image: fileName })
        return post
    }
}
