import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      // 'http://localhost:3000',
      'http://localhost:3001',
      // 'http://localhost:3002',
      // 'http://localhost:3003',
    ],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  // await app.listen(3000);
  // await app.listen(3001);
  // await app.listen(3002);
  await app.listen(3003);
}
bootstrap();
