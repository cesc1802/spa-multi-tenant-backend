import { Injectable } from '@nestjs/common';

@Injectable()
export class SpaMultiTenantService {
  getHello(): string {
    return 'Hello World!';
  }
}
