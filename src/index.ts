import { Env } from '$utils';
import { App } from './App';
import { routes } from './routes';

const port = Env.PORT;

const app = new App(routes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
