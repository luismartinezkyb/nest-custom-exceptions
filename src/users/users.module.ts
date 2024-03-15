import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ErrorHandlerService } from './error-handler.service';
import { NotFoundMiddleware } from './interceptors/middleware-not-found';
// import { APP_INTERCEPTOR } from '@nestjs/core';
// import { NotFoundInterceptor } from '../interceptors/not-found.interceptor';

@Module({
  controllers: [UsersController],
  providers: [
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: NotFoundInterceptor,
    // },
    UsersService,
    Logger,
    ErrorHandlerService,
  ],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(NotFoundMiddleware).forRoutes('users/*');
  }
}
