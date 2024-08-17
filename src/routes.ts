import type { Controller } from '$models';
import { rootRouter } from './routers/root';

export const routes: Controller[] = [
  {
    path: '',
    router: rootRouter,
  },
];
