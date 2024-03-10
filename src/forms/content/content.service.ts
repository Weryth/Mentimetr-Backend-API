import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContentDTO } from './dto/create.content.dto';
import { JwtPayload } from 'src/interfaces/jwt-payload.interface';
import { ExeptionService } from 'src/exeption/exeption.service';

@Injectable()
export class ContentService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly exeprionService: ExeptionService,
  ) {}

  async CreateOneSlide(dataContent: CreateContentDTO, jwtPayload: JwtPayload) {
    const isOwner = this.validateUserInForm(dataContent.formId, jwtPayload.id);
    if (!isOwner) {
      throw this.exeprionService.userIsNowOwner;
    }
    return await this.prismaService.formContent.create({ data: dataContent });
  }

  async findForm(formId: string) {
    return await this.prismaService.forms.findFirst({ where: { id: formId } });
  }

  async validateUserInForm(formId, userId) {
    const form = await this.findForm(formId);
    if (form.userId != userId) {
      return false;
    }
    return true;
  }
}
