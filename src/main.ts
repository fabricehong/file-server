import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configuration } from './configuration';
import { GlobalHttpErrorHandler } from './errors/GlobalHttpErrorHandler';

async function bootstrap() {
  const logger: Logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);
  const port = configuration.getServerPort();
  const host = 'http://localhost';
  app.enableCors();
  app.useGlobalFilters(new GlobalHttpErrorHandler());
  await app.listen(port);
  logger.log(`Serving files in: ${configuration.getStorageRoot()}`);
  logger.log(`listening on port ${host}:${port}`);
}
bootstrap();
