import dotenv from 'dotenv';
import { App } from './App';
import { routes } from './routes';

dotenv.config();

const port = process.env.PORT || 3000;

const app = new App(routes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
