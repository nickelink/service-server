import { Controller, Route, Tags } from 'tsoa';

@Route(`/user`)
@Tags('User')
export class UserController extends Controller {
  constructor() {
    super();
  }
}
