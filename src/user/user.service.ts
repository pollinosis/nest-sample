import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHoge(): string {
    return 'こんにちは〜';
  }
}
