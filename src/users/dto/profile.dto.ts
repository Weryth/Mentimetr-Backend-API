import { IsNotEmpty, IsOptional, IsUrl, MaxLength, isURL } from 'class-validator';

export class UserProfileDTO {
  @IsOptional()
  @MaxLength(50)
  name: string;

  @IsOptional()
  @IsUrl()
  photo: string;
}
