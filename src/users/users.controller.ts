import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConsoleLogResponse } from 'src/decorators/logger.decorator';
import { IdInput } from './dto/id-input.dto';
import { HttpExceptionFilter } from './exceptions/catch-filter.exception';
// import { NotFoundFilter } from './exceptions/not-found-route.exception';

// @UseFilters(new HttpExceptionFilter())
// @UseFilters(new NotFoundFilter())
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Get('/all')
  findAll() {
    // throw new BadRequestException('No_WAY');
    return this.usersService.findAll();
  }

  @Get('/one/:id')
  findOne(@Param() data: IdInput) {
    throw new BadRequestException('No_WAY');
    return this.usersService.findOne(data.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
