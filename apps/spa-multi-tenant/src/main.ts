import { NestFactory } from '@nestjs/core';
import { SpaMultiTenantModule } from './spa-multi-tenant.module';

async function bootstrap() {
  const app = await NestFactory.create(SpaMultiTenantModule);
  await app.listen(3001);
}
bootstrap();
