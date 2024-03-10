import { Module } from '@nestjs/common';
import { FormsService } from './forms.service';
import { FormsController } from './forms.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaSelectData } from 'src/prisma/prisma.select.data';
import { ContentModule } from './content/content.module';
import { ExeptionModule } from 'src/exeption/exeption.module';

@Module({
  providers: [FormsService],
  controllers: [FormsController],
  imports: [PrismaModule, PrismaSelectData, ContentModule, ExeptionModule],
  exports: [FormsService]
})
export class FormsModule {}
