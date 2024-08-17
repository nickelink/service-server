import express, { Application } from 'express';
import { Controller } from '$models';
import { Api } from '$constants';
import { errorMiddleware } from '$middlewares';

export class App {
  public app: Application;

  constructor(controllers: Controller[]) {
    this.app = express();

    // this.initialiseConfig();
    // this.initialiseRoutes();
    this.initialiseControllers(controllers);
    this.initialiseErrorHandling();
  }

  private initialiseControllers(controllers: Controller[]): void {
    controllers.forEach((controller: Controller) => {
      this.app.use(Api.ROOT, controller.router);
    });
  }

  private initialiseErrorHandling(): void {
    this.app.use(errorMiddleware);
  }

  public listen(port: string | number, callback: VoidFunction): void {
    this.app.listen(port, callback);
  }
}
