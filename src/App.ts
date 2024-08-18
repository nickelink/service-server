import express, { Application } from 'express';
import Swagger from 'swagger-ui-express';
import { IRouter } from '$models';
import { Api } from '$constants';
import { errorMiddleware } from '$middlewares';
import { rootRouter } from '$routers';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import swaggerDocument from '../docs/swagger.json';

export class App {
  public app: Application;

  constructor(controllers: IRouter[]) {
    this.app = express();

    this.initialiseConfig();
    this.initialiseRoutes();
    this.initialiseControllers(controllers);
    this.initialiseErrorHandling();
  }

  private initialiseConfig(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    this.app.use(compression());
    this.app.use(cors());
  }

  private initialiseRoutes(): void {
    this.app.use(Api.ROOT, rootRouter);
    this.app.use(Api.DOCS, Swagger.serve, Swagger.setup(swaggerDocument));
  }

  private initialiseControllers(controllers: IRouter[]): void {
    controllers.forEach((controller: IRouter) => {
      this.app.use(`${Api.API}${controller.path}`, controller.router);
    });
  }

  private initialiseErrorHandling(): void {
    this.app.use(errorMiddleware);
  }

  public listen(port: string | number, callback: VoidFunction): void {
    this.app.listen(port, callback);
  }
}
