import { Module } from '@nestjs/common';
import { SpaMultiTenantController } from './spa-multi-tenant.controller';
import { SpaMultiTenantService } from './spa-multi-tenant.service';
import { TenancyModule } from '@app/tenancy';
import { AppConstants } from '@app/tenancy/constants';

@Module({
  imports: [
    TenancyModule.forRoot({
      tenantIdentifier: AppConstants.tenantHeader,
      options: {},
      uri: (tenantId: string) => {
        console.log(" ================= TenantID: =================", tenantId)
        //default tenant
        return `mongodb://127.0.0.1:27017/school-${tenantId}`
      }
    })
  ],
  controllers: [SpaMultiTenantController],
  providers: [SpaMultiTenantService],
})
export class SpaMultiTenantModule {}
