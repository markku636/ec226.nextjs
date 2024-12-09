import { RedisOptions } from 'ioredis';

export const commonConfig: RedisOptions = {
    password: '',
    lazyConnect: true,
    enableAutoPipelining: true,
    maxRetriesPerRequest: 3,
};

export const redisConfigs =
    process.env.NODE_ENV === 'development'
        ? [{ host: '192.168.0.99', port: 30001 }]
        : [
              { host: '192.168.0.99', port: 30006 },
              { host: '192.168.0.99', port: 30007 },
              { host: '192.168.0.99', port: 30008 },
          ];
