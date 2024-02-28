import type { AWS } from '@serverless/typescript';

import dataCollector from '@functions/dataCollector';

const serverlessConfiguration: AWS = {
  service: 'zhcollector-service',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-offline', 'serverless-dotenv-plugin'],
  provider: {
    name: 'aws',
    runtime: 'nodejs20.x', // Consider updating to a newer Node.js version if available and supported
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    region: 'eu-central-1',
    stage: 'dev',
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      // Example environment variable
      MY_CUSTOM_ENV_VARIABLE: 'myCustomValue',
    },
  },
  functions: { dataCollector },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    'serverless-offline': {
      httpPort: 3003,
    },
  },
};

module.exports = serverlessConfiguration;
