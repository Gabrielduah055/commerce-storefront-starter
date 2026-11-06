import { apiEndpoints, externalEndpoints } from './environment.config';
import { BACKEND_ORIGINS } from './backend.config';

const origin = BACKEND_ORIGINS.production.replace(/\/$/, '');

export const environment = {
  production: true,
  apiBaseUrl: `${origin}/api/v1`,
  aiApiBaseUrl: `${origin}/api`,
  apiEndpoints,
  externalEndpoints,
} as const;
