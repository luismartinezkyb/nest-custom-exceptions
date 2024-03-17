import {
  Logger,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ErrorHandlerService } from './error-handler.service';
import { NotFoundMiddleware } from './interceptors/middleware-not-found';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { NotFoundInterceptor } from './interceptors/not-found.interceptors';
import { NotFoundFilter } from './exceptions/not-found-route.exception';
import { BadRequestFilter } from './exceptions/bad-request.exceptiont';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: NotFoundFilter,
    },
    {
      provide: APP_FILTER,
      useClass: BadRequestFilter,
    },
    UsersService,
    Logger,
    ErrorHandlerService,
  ],
})
export class UsersModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(NotFoundMiddleware).exclude();
  // }
}
