import { LogLevel, serverSideLog } from '@utils/log/logging';
import Redis, { RedisOptions } from 'ioredis';
import { commonConfig, redisConfigs } from './redis-config';

export function genNewRedis(redisConfig: RedisOptions) {
    const redis = new Redis(redisConfig);

    redis.on('connect', () => {
        console.log('ENV:', process.env.NODE_ENV);
        console.log(`---------- REDIS CONNECTED ${redisConfig.port} ----------`);
    });

    redis.on('close', () => {
        console.log(`---------- REDIS CLOSE ${redisConfig.port} ----------`);
    });

    redis.on('error', (err: any) => {
        console.log(`---------- REDIS FAILED ${redisConfig.port} ----------`);
        console.error(err);

        serverSideLog(`'[redis-base][connect error][port:${redisConfig.port}]${err.toString()}'`, LogLevel.Error, {
            stack: err.stack ? err.stack.toString() : '',
        });
    });

    return redis;
}

const redisClients: Redis[] = [];

redisConfigs.forEach((config) => {
    const newRedisClient = genNewRedis({ ...commonConfig, ...config });

    redisClients.push(newRedisClient);
});

function isJson(val: string) {
    try {
        JSON.parse(val);
    } catch (e) {
        return false;
    }
    return true;
}

export class RedisBase {
    masterServer = redisClients[0];
    randomServer: Redis;
    isJson = isJson;
    _keys?: string;

    constructor() {
        this.randomServer = redisClients[Math.floor(Math.random() * redisClients.length)];

        // console.log('randomServer', this.randomServer);
    }

    async $get(key: string, forCache = false) {
        try {
            const result = await this.randomServer.get(key);

            if (result) {
                return this.isJson(result) ? JSON.parse(result) : result;
            }
            if (!forCache) {
                serverSideLog('[redis-base][$get]key not found', LogLevel.Error, { key });
            }
            return null;
        } catch (err: any) {
            console.error(err);
            serverSideLog(`[redis-base][$get]redis fail error: ${err.message}`, LogLevel.Error, {
                key,
                stack: err.stack ? err.stack.toString() : '',
            });
            return null;
        }
    }

    async $array<T>(...keys: string[]): Promise<T[]> {
        return await this._array(false, ...keys);
    }

    async _array<T>(includeAll: boolean, ...keys: string[]): Promise<T[]> {
        this._keys = keys.join(', ');

        const result: any[] = [];

        for (const k of keys) {
            const data = await this.$get(k);

            if (data || includeAll) {
                result.push(data);
            }
        }

        return result;
    }

    async $object<T>(...keys: string[]): Promise<{ [key: string]: T }> {
        const result: { [key: string]: any } = {};

        const data = await this._array(true, ...keys);

        data.forEach((item, index) => {
            result[keys[index]] = item;
        });

        return result;
    }

    async $set(data: { [key: string]: string }): Promise<boolean> {
        try {
            this._keys = Object.keys(data).join(', ');

            for (const k in data) {
                await this.masterServer.set(k, data[k]);
            }

            return true;
        } catch (err: any) {
            console.error(err);
            serverSideLog(`[redis-base][$set] error: ${err.message}`, LogLevel.Error, {
                keys: this._keys,
                stack: err.stack ? err.stack.toString() : '',
            });
            return false;
        }
    }

    async $setCacheKey(key: string, value: string, expireSeconds: number): Promise<boolean> {
        try {
            const redisBase = new RedisBase();
            const redis = redisBase.masterServer;

            await redis.set(key, JSON.stringify(value), 'EX', expireSeconds);
            return true;
        } catch (err: any) {
            console.error(err);
            serverSideLog(`[redis-base][$setCacheKey] error ${err.message}`, LogLevel.Error, {
                stack: err.stack ? err.stack.toString() : '',
            });
            return false;
        }
    }
}
