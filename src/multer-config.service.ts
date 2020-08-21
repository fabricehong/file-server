import { Injectable } from '@nestjs/common';
import { MulterModuleOptions, MulterOptionsFactory } from '@nestjs/platform-express';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import * as multer from 'multer';
import { configuration } from './configuration';

@Injectable()
export class MulterConfigService implements MulterOptionsFactory {
    createMulterOptions(): Promise<MulterModuleOptions> | MulterOptions {
        return {
            storage: multer.diskStorage(
                {
                    destination: configuration.getStorageRoot(),
                    filename: (req, file, cb) => {
                        const uniqueSuffix = `${Date.now()}`;
                        const filename = file.originalname;
                        const index = filename.lastIndexOf('.');

                        const newName = 'screen-' +  uniqueSuffix + filename.slice(index, filename.length);
                        cb(null, newName)
                    }
                }
            ),
            limits: {
                fileSize: configuration.getMaxFileSize()
            }
        };
    }

}
