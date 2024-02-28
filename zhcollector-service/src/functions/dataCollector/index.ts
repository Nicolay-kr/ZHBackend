import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'collect-data',
        cors: true,
      },
    },
    {
      // one hour
      // schedule: 'cron(0 * * * ? *)'
      schedule: 'cron(0/1 * * * ? *)',
    },
  ],
  timeout: 30,
};
