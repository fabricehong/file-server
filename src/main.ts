import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger: Logger = new Logger('Bootstrap');
  const port = 3000;
  const host = 'http://localhost';
  const app = await NestFactory.create(AppModule);
  logger.log(`listening on port ${host}:${port}`);
  app.enableCors();
  await app.listen(port);
}
bootstrap();
