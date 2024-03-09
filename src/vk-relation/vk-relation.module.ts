import { Module } from '@nestjs/common';
import { VkRelationService } from './vk-relation.service';
import { VkRelationController } from './vk-relation.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaSelectData } from 'src/prisma/prisma.select.data';

@Module({
  providers: [VkRelationService],
  controllers: [VkRelationController],
  imports:[PrismaModule, PrismaSelectData]
})
export class VkRelationModule {}
