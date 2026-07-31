import { envVars } from '@/config/env';

export const routes = Object.freeze({
  root: '/',
  ui: {
    index: '/',
  },
  api: {
    health: '/api/health',
    ip: '/api/ip',
    mattermostWebhook: '/api/contact/m-webhook', // POST
  },
  webhook: {
    mattermost: `https://team.stack360.co/hooks/${envVars.MATTERMOST_WEBHOOK_ID}`,
  },
});
