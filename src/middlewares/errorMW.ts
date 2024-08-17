import { Request, Response, NextFunction } from 'express';
import { HttpException } from '$utils';

import { HttpCode, HttpReason, Message } from '$constants';

export const errorMiddleware = (
  error: HttpException,
  _req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  try {
    const statusCode = error.statusCode || HttpCode.INTERNAL_SERVER_ERROR;
    const statusMsg = error.statusMsg || HttpReason.INTERNAL_SERVER_ERROR;
    const msg = error.msg || Message.SOMETHING_WENT_WRONG;

    return res.status(statusCode).send({
      status: {
        code: statusCode,
        msg: statusMsg,
      },
      msg: msg,
    });
  } catch (err) {
    return next(err);
  }
};
