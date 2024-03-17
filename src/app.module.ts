import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
// import { APP_INTERCEPTOR } from '@nestjs/core';
// import { NotFoundInterceptor } from './interceptors/not-found.interceptor';
// import { NotFoundMiddleware } from './interceptors/middleware-not-found';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [UsersModule, PostsModule],

  providers: [
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: NotFoundInterceptor,
    // },
  ],
})
export class AppModule {}
