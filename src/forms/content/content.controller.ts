import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContentDTO } from './dto/create.content.dto';
import { ContentService } from './content.service';
import { CurrentUser } from 'src/customDecorators/current-user.decorator';
import { JwtPayload } from 'src/interfaces/jwt-payload.interface';

@Controller('content')
export class ContentController {
    constructor(private readonly contentService: ContentService){}
  
    @Post('create')
    async CreateSlide(@Body() data: CreateContentDTO, @CurrentUser() jwtpayload: JwtPayload){
        return await this.contentService.CreateOneSlide(data, jwtpayload)
    }
}
