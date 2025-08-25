import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let errorCode: string | number | null = null;

    if (exception instanceof HttpException) {
      const errorResponse = exception.getResponse();
      status = exception.getStatus();

      if (typeof errorResponse === 'string') {
        message = errorResponse;
      } else if (typeof errorResponse === 'object') {
        const res = errorResponse as any;
        message = res.message || message;
        errorCode = res.errorCode ?? null;
      }
    } else {
      message = exception.message || message;
    }

    response.status(status).json({
      success: false,
      statusCode: status,
      errorCode,
      message,
    });
  }
}
