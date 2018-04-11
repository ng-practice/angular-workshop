import { environment } from '../../environments/environment';
import { InjectionToken, ValueProvider } from '@angular/core';

export const APP_CONFIG_TOKEN = new InjectionToken('Configuration paramters');

export interface AppConfig {
  apiEndpoint: string;
}

export const ProvideAppConfig: ValueProvider = {
  provide: APP_CONFIG_TOKEN,
  useValue: { apiEndpoint: environment.apiEndpoint }
};
