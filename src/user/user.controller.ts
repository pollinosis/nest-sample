import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('hello')
export class UserController {
  constructor(private readonly appService: UserService) { }

  @Get()
  getHoge(): string {
    return this.appService.getHoge();
  }
}
