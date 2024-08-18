import { Router } from 'express';
import { ExampleController } from './example.controller';

const exampleRouter = Router();

const exampleController = new ExampleController();

exampleRouter.get('', (_req, res) => {
  res.send('Express + TypeScript Server');
});

exampleRouter.get('/healthcheck', (_req, res) => {
  return res.json(exampleController.getHealthCheck());
});

export { exampleRouter };
