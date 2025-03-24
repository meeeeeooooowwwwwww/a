// Environment type
export type Environment = 'local' | 'cloudflare';

// Environment checks
export const isCloudflare = process.env.NEXT_PUBLIC_ENV === 'cloudflare';
export const isLocal = process.env.NEXT_PUBLIC_ENV === 'local';

// Worker configuration
export const VIDEO_WORKER_URL = process.env.NEXT_PUBLIC_VIDEO_WORKER_URL;

// Ensure worker URL is available
if (!VIDEO_WORKER_URL) {
  throw new Error('VIDEO_WORKER_URL is not defined in environment variables');
}

// Export current environment
export const currentEnvironment: Environment = isCloudflare ? 'cloudflare' : 'local'; 