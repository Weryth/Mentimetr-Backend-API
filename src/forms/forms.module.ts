import { Module } from '@nestjs/common';
import { FormsService } from './forms.service';
import { FormsController } from './forms.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaSelectData } from 'src/prisma/prisma.select.data';
import { ContentModule } from './content/content.module';

@Module({
  providers: [FormsService],
  controllers: [FormsController],
  imports: [PrismaModule, PrismaSelectData, ContentModule]
})
export class FormsModule {}
