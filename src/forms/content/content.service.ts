import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContentDTO } from './dto/create.content.dto';
import { JwtPayload } from 'src/interfaces/jwt-payload.interface';
import { FormsService } from '../forms.service';

@Injectable()
export class ContentService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly formService: FormsService
    ) {}

  async CreateOneSlide(dataContent: CreateContentDTO, jwtPayload: JwtPayload) {
    return await this.prismaService.formContent.create({ data: dataContent });
  }
}
