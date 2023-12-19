import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: [
      'https://localhost:8080',
      'http://localhost:8080',
      'https://65.2.81.108:3000',
      'http://65.2.81.108:3000',
      'https://65.2.81.108:8080',
      'http://65.2.81.108:8080'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  };

  app.enableCors(corsOptions);

  await app.listen(3000);
}
bootstrap();
