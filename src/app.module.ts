import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { MulterConfigService } from './multer-config.service';

@Module({
  imports: [
    MulterModule.registerAsync(
        {
            useClass: MulterConfigService
        }
    ),
  ],
  controllers: [AppController],
  providers: [MulterConfigService],
})
export class AppModule {}
