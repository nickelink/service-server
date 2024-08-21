import { connect } from 'mongoose';

import { logger } from '$utils';

export const connectToDb = async (url: string) => {
  try {
    const connection = await connect(url);
    logger.info(
      `Mongo DB is connected to: ${connection.connection.host}:${connection.connection.port}`,
    );
    logger.info(
      `Mongo DB config is: ${JSON.stringify(connection.connection.config)}`,
    );
  } catch (err) {
    logger.error(`An error occurred\n\r\n\r${err}`);
  }
};
