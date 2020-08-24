import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { MulterConfigService } from './multer-config.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MulterModule.registerAsync(
        {
            useClass: MulterConfigService
        }
    ),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [MulterConfigService],
})
export class AppModule {}
