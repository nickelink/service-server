import { Controller, Get, Route, Tags } from 'tsoa';

import { HttpCode, HttpReason, Message } from '$constants';

@Route(`/example`)
@Tags('Example')
export class ExampleController extends Controller {
  constructor() {
    super();
  }

  @Get('healthcheck')
  public getHealthCheck() {
    return {
      status: {
        code: HttpCode.OK,
        msg: HttpReason.OK,
      },
      msg: Message.API_WORKING,
    };
  }
}
