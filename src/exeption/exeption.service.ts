import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class ExeptionService {
  public userIsNowOwner: HttpException = new HttpException(
    'this is not your form',
    HttpStatus.FORBIDDEN,
  );
}
