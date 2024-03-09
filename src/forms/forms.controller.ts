import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FormsService } from './forms.service';
import { FormCreateDTO } from './dto/form.create.dto';
import { CurrentUser } from 'src/customDecorators/current-user.decorator';
import { JwtPayload } from 'src/interfaces/jwt-payload.interface';
import { FormUpdateDTO } from './dto/form.update.dto';

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Get()
  async GetAllUserForms(@CurrentUser() jwtPayload: JwtPayload) {
    return await this.formsService.GetAllUserForms(jwtPayload);
  }

  @Post('create')
  async CreateNewForm(
    @Body() data: FormCreateDTO,
    @CurrentUser() jwtPayload: JwtPayload,
  ) {
    return await this.formsService.CreateNewForm(data, jwtPayload);
  }

  @Put('update')
  async UpdateForm(
    @Body() data: FormUpdateDTO,
    @CurrentUser() jwtPayload: JwtPayload,
  ) {
    return await this.formsService.UpdateForm(data, jwtPayload);
  }

  @Delete('delete/id=:formid')
  async DeleteForm(
    @Param('formid') id: string,
    @CurrentUser() jwtPayload: JwtPayload,
  ) {
    return this.formsService.DeleteForm(id, jwtPayload);
  }
}
