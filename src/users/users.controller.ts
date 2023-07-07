import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { Response } from 'express';

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
  getUserByQuary(@Res() res: Response, @Query() query: any) {
    const service = new UsersService();
    const user = service.getUser(query.phone);
    res.status(200).json(user);
  }
}
