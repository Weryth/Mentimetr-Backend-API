import { Module } from '@nestjs/common';
import { ExeptionService } from './exeption.service';

@Module({
  providers: [ExeptionService],
  exports: [ExeptionService]
})
export class ExeptionModule {}
