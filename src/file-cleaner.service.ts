import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as fs from 'fs';
import * as moment from 'moment';
import { join } from 'path';
import { configuration } from './configuration';

@Injectable()
export class FileCleanerService {

    private readonly logger: Logger = new Logger(FileCleanerService.name);

    @Cron(CronExpression.EVERY_HOUR)
    public clean() {
        this.logger.log('cron running');
        const files = fs.readdirSync(configuration.getStorageRoot()).map((file: string) => join(configuration.getStorageRoot(), file));

        let deleted = 0;
        files
            .filter((file: string) => {
                const lastDateModified = this.getLastDateModified(file);
                const now = moment();
                const duration = moment.duration(now.diff(lastDateModified));
                return duration.asMinutes() > configuration.getFilesExpirationMinutes();
            })
            .forEach((file: string) => {
                fs.unlinkSync(file);
                deleted++;
                this.logger.log(`file '${file}' deleted`);
            });
        this.logger.log(`${files.length - deleted} files remaining in directory`)
    }

    private getLastDateModified(filePath: string): moment.Moment {
        const stats = fs.statSync(filePath);
        return moment(stats.ctime);
    }
}
