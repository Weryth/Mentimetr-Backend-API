import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService, PrismaService],
  imports:[PrismaModule],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
