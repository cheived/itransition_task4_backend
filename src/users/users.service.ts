import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(data) {
    return await this.prisma.user.create({ data });
  }

  async readUser(id: number) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async readUsers() {
    return await this.prisma.user.findMany();
  }

  async updateUser(data) {
    return await this.prisma.user.update({ where: { id: data.id }, data });
  }

  async deleteUser(id: number) {
    return await this.prisma.user.delete({ where: { id } });
  }

  async findUserByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email } });
  }
}
