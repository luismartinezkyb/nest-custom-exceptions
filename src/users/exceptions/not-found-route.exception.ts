import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  NotFoundException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(NotFoundException)
export class NotFoundFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const regex = /users/gi;
    if (regex.test(request.url)) {
      return response.status(status).json({
        statusCode: status,
        message: 'Custom Not Found Error Message', // Custom message for 404 error
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
    return response.status(HttpStatus.NOT_FOUND).json({
      statusCode: HttpStatus.NOT_FOUND,
      message: `Cannot ${request.method} ${request.url}`,
      error: 'Not Found',
    });
  }
}
