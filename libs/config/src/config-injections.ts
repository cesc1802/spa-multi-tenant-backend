import { Inject } from '@nestjs/common';
import { appConfiguration, authConfiguration, mongoConfiguration } from '@app/configurations';

export const InjectAppConfig = () => Inject(appConfiguration.KEY);
export const InjectAuthConfig = () => Inject(authConfiguration.KEY);
export const InjectMongoConfig = () => Inject(mongoConfiguration.KEY);
