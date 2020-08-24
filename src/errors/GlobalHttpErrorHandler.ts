import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger, } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class GlobalHttpErrorHandler implements ExceptionFilter {
    private readonly logger: Logger = new Logger(GlobalHttpErrorHandler.name);

    public catch(exception: HttpException, host: ArgumentsHost): any {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();

        this.logger.error(`${request.url}: ${exception.message}`);

        response
            .status(status)
            .json({
                statusCode: status,
                message: exception.message,
                path: request.url,
            });
    }
}
