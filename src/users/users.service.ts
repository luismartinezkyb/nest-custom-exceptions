import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConsoleLogResponse } from 'src/decorators/logger.decorator';
import { ErrorHandlerResponse } from 'src/decorators/error.decorator';
import { CatchException } from './exceptions/catching-response.exception';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
  @ConsoleLogResponse()
  findAll() {
    return `This action returns all users`;
  }
  @ErrorHandlerResponse()
  findOne(id: string) {
    throw new Error('hey');
    throw new CatchException('bad errror');
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
