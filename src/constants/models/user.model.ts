import mongoose from 'mongoose';

import { PersonSchema, UserSchema } from '../schemas';
import { ModelNames } from './modelNames';

export const UserModel = mongoose.model(ModelNames.userModel, UserSchema);

export const PersonModel = mongoose.model(ModelNames.personModel, PersonSchema);
