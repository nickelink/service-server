import { Router } from 'express';

import { HttpCode, HttpReason, Message } from '$constants';
import { HttpException } from '$utils';

const rootRouter = Router();

rootRouter.get('/healthcheck', (_req, res, next) => {
  try {
    return res.status(HttpCode.OK).json({
      status: {
        code: HttpCode.OK,
        msg: HttpReason.OK,
      },
      msg: Message.API_WORKING,
    });
  } catch (err) {
    if (!(err instanceof Error)) {
      throw err;
    }
    return next(
      new HttpException(
        HttpCode.INTERNAL_SERVER_ERROR,
        HttpReason.INTERNAL_SERVER_ERROR,
        err?.message,
      ),
    );
  }
});

rootRouter.get('', (req, res) => {
  res.send(`
  <html lang="en">
  <head>
    <title>Serice Server</title>
  </head>
  <body style="background: darkgrey">
    <h1>Express + TypeScript Server</h1>
    <p style="font-size: 24px">
      <a style="padding: 10px; border: 2px solid darkmagenta; border-radius: 20px"  href="/docs" >OpenAPI</a>
         for Service Server
    </p>
  </body>
  </html>
  `);
});

export { rootRouter };
