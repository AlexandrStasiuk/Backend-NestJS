import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
//Модуль для работы с файлами
@Module({
  providers: [FilesService],
  exports: [FilesService]
})
export class FilesModule {}
