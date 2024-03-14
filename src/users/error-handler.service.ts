import { Injectable } from '@nestjs/common';
import { CatchException } from './exceptions/catching-response.exception';

@Injectable()
export class ErrorHandlerService {
  handleError(error: Error, propertyKey: string) {
    console.log({ where: propertyKey, error: error.message });
    return new CatchException(error.message);
  }
}
