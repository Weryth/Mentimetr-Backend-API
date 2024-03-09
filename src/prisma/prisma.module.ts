import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaSelectData } from './prisma.select.data';

@Module({
  controllers: [],
  providers: [PrismaService, PrismaSelectData],
  exports: [PrismaService, PrismaSelectData],
})
export class PrismaModule {}
