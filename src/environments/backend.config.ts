// Public configuration only. Use the backend origin WITHOUT /api or /api/v1.
// Angular compiles these values into the bundle. Rebuild after changes.
export const BACKEND_ORIGINS = {
  development: 'http://localhost:3000',
  production: 'https://api.example.invalid',
} as const;
