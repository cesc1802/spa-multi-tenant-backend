import { Module } from '@nestjs/common';
import { TenancyModule } from '@app/tenancy';
import { AppConstants } from '@app/tenancy/constants';
import { AppConfigModule } from '@app/config';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoConfiguration, MongoConfiguration } from '@app/configurations';
import { UserModule } from '@app/user';

@Module({
  imports: [
    TenancyModule.forRoot({
      tenantIdentifier: AppConstants.tenantHeader,
      options: {},
      uri: (tenantId: string) => {
        return `mongodb://127.0.0.1:27017/spa-${tenantId}`;
      },
    }),
    AppConfigModule,
    MongooseModule.forRootAsync({
      inject: [mongoConfiguration.KEY],
      useFactory: async (dbConfig: MongoConfiguration) => ({
        uri: dbConfig.uri,
        dbName: dbConfig.dbName
      }),
    }),
    UserModule,
  ],
})
export class SpaMultiTenantModule {
}
