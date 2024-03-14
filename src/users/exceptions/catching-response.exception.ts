import { HttpException, HttpStatus } from '@nestjs/common';

export class CatchException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.URI_TOO_LONG);
  }
}
