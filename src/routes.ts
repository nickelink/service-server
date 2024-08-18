import type { IRouter } from '$models';
import { exampleRouter } from '$routers';

export const routes: IRouter[] = [
  {
    path: '/example',
    router: exampleRouter,
  },
];
