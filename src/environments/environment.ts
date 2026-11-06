import { apiEndpoints, externalEndpoints } from './environment.config';
import { BACKEND_ORIGINS } from './backend.config';

const origin = BACKEND_ORIGINS.development.replace(/\/$/, '');

export const environment = {
  production: false,
  apiBaseUrl: `${origin}/api/v1`,
  aiApiBaseUrl: `${origin}/api`,
  apiEndpoints,
  externalEndpoints,
} as const;
