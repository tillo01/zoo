import { Injectable } from '@nestjs/common';
import { retry } from 'rxjs';

@Injectable()
export class CatService {
  public getHello(): string {
    return 'MYEOW';
  }
  public introduce(): string {
    return 'My name is Tom';
  }
}
