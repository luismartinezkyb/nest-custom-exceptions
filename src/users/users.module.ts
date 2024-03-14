import { Logger, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ErrorHandlerService } from './error-handler.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, Logger, ErrorHandlerService],
})
export class UsersModule {}
