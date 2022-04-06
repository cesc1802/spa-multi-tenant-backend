import { NestFactory } from '@nestjs/core';
import { SpaMultiTenantModule } from './spa-multi-tenant.module';
import { appConfiguration, AppConfiguration } from '@app/configurations';

async function bootstrap() {
  const app = await NestFactory.create(SpaMultiTenantModule);
  const appConfig = app.get<AppConfiguration>(appConfiguration.KEY);
  await app.listen(appConfig.port);
}
bootstrap();
