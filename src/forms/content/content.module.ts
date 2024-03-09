import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaSelectData } from 'src/prisma/prisma.select.data';
import { FormsService } from '../forms.service';

@Module({
  providers: [ContentService],
  controllers: [ContentController],
  imports:[PrismaModule, PrismaSelectData]
})
export class ContentModule {}
