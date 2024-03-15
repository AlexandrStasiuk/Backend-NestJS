import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function start() {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule)
    //Документация http://localhost:5000/api/docs
    const config = new DocumentBuilder()
        .setTitle('Практика по NestJS')
        .setDescription('Документация Rest API')
        .setVersion('1.0.0')
        .addTag('Alexander Stasiuk')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(PORT, () => console.log(`Server started on ${PORT}`))
}

start()