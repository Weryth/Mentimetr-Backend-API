import { FormTypes, ModerationType } from '@prisma/client';
import { IsBoolean, IsEnum, IsInt, IsNotEmpty, IsOptional, IsUUID, MaxLength } from 'class-validator';

export class FormCreateDTO {

  @IsNotEmpty()
  @MaxLength(100)
  title: string;

  @IsNotEmpty()
  @IsEnum(FormTypes)
  type: FormTypes;

  @IsNotEmpty()
  @IsBoolean()
  isAnonim: boolean;

  @IsNotEmpty()
  @IsEnum(ModerationType)
  moderationType: ModerationType;

  @IsOptional()
  @IsInt()
  maxusers?: number;
}
