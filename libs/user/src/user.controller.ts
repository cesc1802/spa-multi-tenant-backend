import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '@app/user/user.service';
import { User } from '@app/models';
import { CreateUserDto } from '@app/dtos';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.getAll()
  }

  @Post()
  async register(@Body() dto: CreateUserDto): Promise<User> {
    return this.userService.create(dto)
  }
}
