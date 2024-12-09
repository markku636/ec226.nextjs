import { getHostIP } from '@utils/common';

// https://docs.datalust.co/v4.2/docs/logging-levels
export const enum LogLevel {
    Debug = 'Debug',
    Information = 'Information',
    Warning = 'Warning',
    Error = 'Error',
    Fatal = 'Fatal',
}

export const enum LogEnvironment {
    DEV = 'DEV',
    PROD = 'PROD',
}

export const country = 'US';

export const getLogProperties = (souce: string, message: string, level = LogLevel.Information, param: any = {}) => {
    const properties: any = {
        ...{
            Source: souce,
            Environment: process.env.NODE_ENV === 'development' ? LogEnvironment.DEV : LogEnvironment.PROD,
            Message: message,
            Country: country,
        },
        ...param,
    }; // 保留程式彈性，所以用 any

    return properties;
};

// client side log ( Browser Log)
export const clientSideLog = (message: string, level = LogLevel.Information, param: any = {}) => {
    if (!message) {
        return;
    }
    const seq = require('seq-logging');

    param.Url = window.location.pathname;

    const logger = new seq.Logger({
        serverUrl: process.env.NEXT_PUBLIC_SEQ_SERVER_URL,
        apiKey: process.env.NEXT_PUBLIC_SEQ_SERVER_API_KEY,
    });

    const properties = getLogProperties('NextJS-Frontend', message, level, param);

    logger.emit({
        timestamp: new Date(),
        level: level || LogLevel.Information,
        messageTemplate: '{Message}',
        properties: properties,
    });

    logger.close();
};

// Server side log ( Next js )
export const serverSideLog = (message: string, level = LogLevel.Information, param: any = {}) => {
    if (!message) {
        return;
    }

    const winston = require('winston');
    const { SeqTransport } = require('@datalust/winston-seq');

    const logger = winston.createLogger({
        transports: [
            new SeqTransport({
                serverUrl: process.env.NEXT_PUBLIC_SEQ_SERVER_URL,
                apiKey: process.env.NEXT_PUBLIC_SEQ_SERVER_API_KEY,
                onError: (e: any) => {
                    console.error(e);
                },
            }),
        ],
    });

    param.HostIP = getHostIP();

    const properties = getLogProperties('NextJS-Backend', message, level, param);

    switch (level) {
        case LogLevel.Information:
            logger.info(message, properties);
            break;
        case LogLevel.Debug:
            logger.debug(message, properties);
            break;
        case LogLevel.Warning:
            logger.warn(message, properties);
            break;
        case LogLevel.Error:
        case LogLevel.Fatal: // no Fatal
            logger.error(message, properties);
            break;
        default:
            logger.info(message, properties);
    }
};
