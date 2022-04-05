import {Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfiguration, authConfiguration, mongoConfiguration } from '@app/configurations';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
      load: [appConfiguration, authConfiguration, mongoConfiguration]
    })
  ],
})
export class AppConfigModule {}
