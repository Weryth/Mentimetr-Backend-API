import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserProfileDTO } from './dto/profile.dto';
import { CurrentUser } from 'src/customDecorators/current-user.decorator';
import { JwtPayload } from 'src/interfaces/jwt-payload.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    @Get()
    async Test(){
        return "OK"
    }

    @Post("update")
    async UpdateUserProfile(@Body() data: UserProfileDTO, @CurrentUser() jwtPayload: JwtPayload){
        return this.usersService.UpdateUserProfile(data, jwtPayload)
    }
}
