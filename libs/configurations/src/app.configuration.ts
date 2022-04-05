import { ConfigType, registerAs } from '@nestjs/config';

export const appConfiguration = registerAs('app', ()=> ({
  host: process.env.APP_HOST || 'localhost',
  port: process.env.APP_PORT || 8080,
  domain: process.env.APP_DOMAIN || 'http://localhost:8080',
  env: process.env.APP_ENV || 'development',
}))

export type AppConfiguration = ConfigType<typeof appConfiguration>;
