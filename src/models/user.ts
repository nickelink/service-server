import type { Document } from 'mongoose';

export type IUser = Document & {
  username: string;
  fullName: string;
  password: string;
  isAdmin: boolean;
  role: string;
};

export type IPerson = Document & {
  username: string;
  email: string;
  phone: string;
  address: string;
};
