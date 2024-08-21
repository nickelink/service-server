import type { Application } from 'express';
import express from 'express';
import Swagger from 'swagger-ui-express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { Api } from '$constants';
import { errorMiddleware } from '$middlewares';
import type { IRouter } from '$models';
import { rootRouter } from '$routers';
import { connectToDb, Env } from '$utils';
import swaggerDocument from '../docs/swagger.json';

export class App {
  public app: Application;
  private readonly DATABASE_URL: string;

  constructor(controllers: IRouter[]) {
    this.app = express();
    this.DATABASE_URL = Env.DATABASE_URL;

    this.initConfig();
    this.initRoutes();
    this.initControllers(controllers);
    this.initErrorHandling();
    this.initDatabaseConnection(this.DATABASE_URL);
  }

  private initConfig(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    this.app.use(compression());
    this.app.use(cors());
  }

  private initRoutes(): void {
    this.app.use(Api.ROOT, rootRouter);
    this.app.use(Api.DOCS, Swagger.serve, Swagger.setup(swaggerDocument));
  }

  private initControllers(controllers: IRouter[]): void {
    controllers.forEach((controller: IRouter) => {
      this.app.use(`${Api.API}${controller.path}`, controller.router);
    });
  }

  private initErrorHandling(): void {
    this.app.use(errorMiddleware);
  }

  private initDatabaseConnection(databaseUrl: string): void {
    connectToDb(databaseUrl);
  }

  public listen(port: string | number, callback: VoidFunction): void {
    this.app.listen(port, callback);
  }
}
