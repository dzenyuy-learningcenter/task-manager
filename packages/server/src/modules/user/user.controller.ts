import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async users() {
    const users = await this.prisma.user.findMany();
    console.log(users);
    return users;

  }
}
