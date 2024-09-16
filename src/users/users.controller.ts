import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(data) {
    return await this.usersService.createUser(data);
  }

  @Get(':id')
  async readUser(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.readUser(id);
  }

  @Get()
  async readUsers() {
    return await this.usersService.readUsers();
  }

  @Put()
  async updateUser(data) {
    return await this.usersService.updateUser(data);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.deleteUser(id);
  }
}
