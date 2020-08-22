import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configuration } from './configuration';

async function bootstrap() {
  const logger: Logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);
  const port = configuration.getServerPort();
  const host = 'http://localhost';
  app.enableCors();
  await app.listen(port);
  logger.log(`Serving files in: ${configuration.getStorageRoot()}`);
  logger.log(`listening on port ${host}:${port}`);
}
bootstrap();
