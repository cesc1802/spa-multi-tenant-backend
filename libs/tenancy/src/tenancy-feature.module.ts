import { DynamicModule, Global, Module } from '@nestjs/common';
import { ModelDefinition } from './interfaces';
import { createTenancyProviders } from './factories'

@Global()
@Module({})
export class TenancyFeatureModule {

  static register(models: ModelDefinition[]): DynamicModule {
    const providers = createTenancyProviders(models);

    return {
      module: TenancyFeatureModule,
      providers,
      exports: providers,
    };
  }

}
