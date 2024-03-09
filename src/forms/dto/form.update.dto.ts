import { FormTypes, ModerationType } from '@prisma/client';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class FormUpdateDTO {
  @IsNotEmpty()
  formId: string;

  @IsOptional()
  @MaxLength(100)
  title?: string;

  @IsOptional()
  @IsBoolean()
  isAnonim?: boolean;
  @IsOptional()
  @IsEnum(ModerationType)
  moderationType?: ModerationType;

  @IsOptional()
  @IsInt()
  maxusers?: number;
}
