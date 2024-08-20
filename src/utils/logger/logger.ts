import winston from 'winston';
import { LogPath, Dateformat } from '$constants';

import { Env } from '../env';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => {
  const env = Env.NODE_ENV || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'warn';
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({
    format: Dateformat.FULL_TIMESTAMP,
  }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
);

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: LogPath.LOGS_ERROR,
    level: 'error',
  }),
  new winston.transports.File({ filename: LogPath.LOGS_ALL }),
];

export const logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});
