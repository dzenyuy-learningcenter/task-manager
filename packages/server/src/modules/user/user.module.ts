import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { PrismaService } from '../../prisma/prisma.service';
import { UserController} from './user.controller';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [PrismaService],
})
export class UserModule {}
