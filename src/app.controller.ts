import { Controller, Get, Logger, LoggerService, Param, Post, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from './auth/JwtAuthGuard';
import { configuration } from './configuration';
import { FileUploadResponse } from './models/FileUploadResponse';

@Controller()
export class AppController {

  private readonly logger: Logger = new Logger(AppController.name);

  @UseGuards(JwtAuthGuard)
  @Post('files')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file): FileUploadResponse {
    this.logger.log(`File '${file.originalname}' uploaded to '${file.path}'`);
    return {
      fileId: file.filename
    }
  }

  @Get('files/:fileId')
  async serveAvatar(@Param('fileId') fileId, @Res() res): Promise<any> {
    res.sendFile(fileId, { root: configuration.getStorageRoot()});
  }
}
