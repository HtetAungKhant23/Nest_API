import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  // @Get()
  // getAllUser() {
  //   return [];
  // }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return id;
  }

  @Get()
  getUserByQuary(@Query() query: any) {
    return { fu: query.type };
  }
}
