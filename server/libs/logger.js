import winston from 'winston';
import config from '../config';

const { level, colorize } = config.logger;

export default (module, level = level, colorize = colorize ) => {
    const path =  module.filename.split('/').slice(-2).join('/');

    return new winston.Logger({
        transports : [
            new winston.transports.Console({
                colorize: colorize,
                level: level,
                label: path
            })
        ]
    });
}
