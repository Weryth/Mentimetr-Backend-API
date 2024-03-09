import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserProfileDTO } from './dto/profile.dto';
import { PrismaSelectData } from 'src/prisma/prisma.select.data';
import { JwtPayload } from 'src/interfaces/jwt-payload.interface';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly prismaSelectData: PrismaSelectData
    ) {}

  async findOne(userEmail: string) {
    return this.prismaService.user.findFirst({ where: { email: userEmail } });
  }

  async UpdateUserProfile(data: UserProfileDTO, jwtPayload: JwtPayload) {
    return await this.prismaService.user.update({
      where: { id: jwtPayload.id },
      data: { name: data.name, photo: data.photo },
      select: this.prismaSelectData.UserProfileSelect
    });
  }
}
