// import {
//   Injectable,
//   NestInterceptor,
//   ExecutionContext,
//   NotFoundException,
//   CallHandler,
// } from '@nestjs/common';
// import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable()
// export class NotFoundInterceptor implements NestInterceptor {
//   intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
//     return next.handle().pipe(
//       catchError(() => {
//         console.log('ERROR');
//         throw new NotFoundException('La ruta solicitada no fue encontrada');
//       }),
//     );
//   }
// }
