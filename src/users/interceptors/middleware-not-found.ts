import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';

@Injectable()
export class NotFoundMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // next()
    throw new NotFoundException('La ruta solicitada no fue encontrada');
  }
}
