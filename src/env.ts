import dotenv from 'dotenv';

dotenv.config();

export class Env {
  public static readonly NODE_ENV = process.env.NODE_ENV || 'development';
  public static readonly PORT = Number(process.env.PORT) || 3007;
  public static readonly DATABASE_URL = process.env.DATABASE_URL;
  public static readonly JWT_SECRET = process.env.JWT_SECRET;
  public static readonly PASS_SECRET = process.env.PASS_SECRET;
}
