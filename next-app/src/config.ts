export const WORKER_URL = 'https://my-video-worker.generalflynn17.workers.dev';

export const VIDEO_CONFIG = {
  LIMIT: 12,
  ENDPOINTS: {
    WARROOM: `${WORKER_URL}/videos/warroom`,
    NATALIE: `${WORKER_URL}/videos/natalie`,
  }
} as const; 