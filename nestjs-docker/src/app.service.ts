import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const test = 'Test';
    return 'Hello World! ' + test;
  }
}
