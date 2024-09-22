import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from './entities';
import { AuthGuard } from 'src/auth/auth.guard';
import { Public } from 'src/decorators/public.decorator';
@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('profile')
  getProfile(@Req() request: Request) {
    return request['user'];
  }

  @ApiCreatedResponse({ type: User })
  @UsePipes(ValidationPipe)
  @Public()
  @Post()
  async createUser(@Body() data: CreateUserDto): Promise<User> {
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
  @Put(':id')
  async updateUser(@Body() data: UpdateUserDto): Promise<User> {
    return await this.usersService.updateUser(data);
  }

  @ApiOkResponse({ type: User })
  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return await this.usersService.deleteUser(id);
  }

  @Delete()
  async deleteManyUsers(@Body() usersId: number[]) {
    return await this.usersService.deleteManyUsers(usersId);
  }

  @Patch('/activate')
  async activateUsers(@Body() usersId: number[]) {
    return await this.usersService.changeUsersStatus(usersId, true);
  }

  @Patch('/deactivate')
  async deactivateUsers(@Body() usersId: number[]) {
    return await this.usersService.changeUsersStatus(usersId, false);
  }
}
