import { Router } from 'express';

const rootRouter = Router();

rootRouter.get('', (req, res) => {
  res.send('Express + TypeScript Server');
});

export { rootRouter };
