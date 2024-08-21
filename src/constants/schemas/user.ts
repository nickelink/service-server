import mongoose from 'mongoose';

import { Constrains } from './constrains';

/** User info */
export const UserSchema = new mongoose.Schema(
  {
    username: {
      type: 'string',
      required: true,
      unique: true,
      min: Constrains.USERNAME_MIN_LENGTH,
      max: Constrains.USERNAME_MAX_LENGTH,
    },
    fullName: {
      type: 'string',
      required: true,
      min: Constrains.NAME_MIN_LENGTH,
      max: Constrains.NAME_MAX_LENGTH,
    },
    password: {
      type: 'string',
      required: true,
      min: Constrains.PASSWORD_MIN_LENGTH,
      max: Constrains.PASSWORD_MAX_LENGTH,
    },
    isAdmin: {
      type: 'boolean',
      default: false,
    },
    role: {
      type: 'string',
      default: 'user',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

/** Personal info */
export const PersonSchema = new mongoose.Schema(
  {
    username: {
      type: 'string',
      required: true,
      unique: true,
      min: Constrains.USERNAME_MIN_LENGTH,
      max: Constrains.USERNAME_MAX_LENGTH,
    },
    email: {
      type: 'string',
      required: true,
      max: Constrains.EMAIL_MAX_LENGTH,
    },
    phone: {
      type: 'string',
      required: true,
      min: Constrains.PHONE_MIN_LENGTH,
      max: Constrains.PHONE_MAX_LENGTH,
    },
    address: {
      type: 'string',
      required: true,
      min: Constrains.ADDRESS_MIN_LENGTH,
      max: Constrains.ADDRESS_MAX_LENGTH,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);
