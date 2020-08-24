import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger, } from '@nestjs/common';

@Catch()
export class GlobalHttpErrorHandler implements ExceptionFilter {
    private readonly logger: Logger = new Logger(GlobalHttpErrorHandler.name);

    public catch(exception: HttpException, host: ArgumentsHost): any {
        this.logger.error(exception);
        throw exception;
    }
}
