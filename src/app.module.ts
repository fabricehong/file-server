import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { MulterConfigService } from './multer-config.service';
import { AuthModule } from './auth/auth.module';
import { FileCleanerService } from './file-cleaner.service';

@Module({
  imports: [
    MulterModule.registerAsync(
        {
            useClass: MulterConfigService
        }
    ),
    AuthModule,
    ScheduleModule.forRoot()
  ],
  controllers: [AppController],
  providers: [MulterConfigService, FileCleanerService],
})
export class AppModule {}
