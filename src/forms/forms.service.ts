import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FormCreateDTO } from './dto/form.create.dto';
import { JwtPayload } from 'src/interfaces/jwt-payload.interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { title } from 'process';
import { FormUpdateDTO } from './dto/form.update.dto';
import { FormStates } from '@prisma/client';

@Injectable()
export class FormsService {
  constructor(private readonly prismaService: PrismaService) {}

  async GetAllUserForms(jwtPayload: JwtPayload) {
    return await this.prismaService.forms.findMany({
      where: { userId: jwtPayload.id },
    });
  }

  async CreateNewForm(data: FormCreateDTO, jwtPayload: JwtPayload) {
    return await this.prismaService.forms.create({
      data: {
        userId: jwtPayload.id,
        title: data.title,
        type: data.type,
        isAnonim: data.isAnonim,
        moderationType: data.moderationType,
        maxUsers: data.maxusers,
      },
    });
  }
  async UpdateForm(data: FormUpdateDTO, jwtPayload: JwtPayload) {
    const form = await this.findForm(data.formId);

    if (!form || jwtPayload.id != form.userId) {
      throw new HttpException(
        'this is not your form, dont do this anymore',
        HttpStatus.FORBIDDEN,
      );
    }
    if (form.isOpen == FormStates.OPEN) {
      throw new HttpException(
        'You cannot update your form when it is open',
        HttpStatus.FORBIDDEN,
      );
    }

    return await this.prismaService.forms.update({
      where: { id: data.formId },
      data: {
        title: data.title,
        isAnonim: data.isAnonim,
        moderationType: data.moderationType,
        maxUsers: data.maxusers,
      },
    });
  }

  async DeleteForm(formId: string, jwtPayload: JwtPayload) {
    try {
      const form = await this.findForm(formId);
      if (form.userId != jwtPayload.id) {
        throw new HttpException(
          'this is not your form, dont do this anymore',
          HttpStatus.FORBIDDEN,
        );
      }
      return await this.prismaService.forms.delete({ where: { id: formId } });
    } catch (error) {
      throw new HttpException('form is not exist', HttpStatus.NOT_FOUND);
    }
  }

  async findForm(formId: string) {
    return await this.prismaService.forms.findFirst({ where: { id: formId } });
  }
}
