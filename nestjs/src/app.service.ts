import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const test = 'test';
    return 'Hello World!' + test;
  }
}
