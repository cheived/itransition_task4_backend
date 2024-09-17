import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities';
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiCreatedResponse({ type: User })
  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() data: UpdateUserDto): Promise<User> {
    return await this.usersService.createUser(data);
  }

  @ApiOkResponse({ type: User })
  @Get(':id')
  async readUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return await this.usersService.readUser(id);
  }

  @ApiOkResponse({ type: User })
  @Get()
  async readUsers(): Promise<User[]> {
    return await this.usersService.readUsers();
  }

  @ApiOkResponse({ type: User })
  @UsePipes(ValidationPipe)
  @Put()
  async updateUser(@Body() data: UpdateUserDto): Promise<User> {
    return await this.usersService.updateUser(data);
  }

  @ApiOkResponse({ type: User })
  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return await this.usersService.deleteUser(id);
  }
}
