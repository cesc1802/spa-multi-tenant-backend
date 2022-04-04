import { Controller, Get } from '@nestjs/common';
import { SpaMultiTenantService } from './spa-multi-tenant.service';

@Controller()
export class SpaMultiTenantController {
  constructor(private readonly spaMultiTenantService: SpaMultiTenantService) {}

  @Get()
  getHello(): string {
    return this.spaMultiTenantService.getHello();
  }
}
