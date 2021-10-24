import { Injectable } from '@nestjs/common';

@Injectable() // 의존성 주입이 가능하다는 데코레이터
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
