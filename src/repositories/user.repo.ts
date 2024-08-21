import { UserModel } from '$constants';
import type { IUser, MaybePromise } from '$models';

export class UserRepo {
  public async findAll(): Promise<IUser[]> {
    return UserModel.find({}).select('-password');
  }

  public async findById(id: string): MaybePromise<IUser> {
    return UserModel.findById(id).select('-password');
  }

  public async findByUsername(username: string): MaybePromise<IUser> {
    return UserModel.findOne({ username }).select('-password');
  }

  public async findByFullName(fullName: string): MaybePromise<IUser> {
    return UserModel.findOne({ fullName }).select('-password');
  }

  public async findByIdWithPassword(id: string): MaybePromise<IUser> {
    return UserModel.findById(id);
  }

  public async findByUsernameWithPassword(
    username: string,
  ): MaybePromise<IUser> {
    return UserModel.findOne({ username });
  }

  public async findByFullNameWithPassword(
    fullName: string,
  ): MaybePromise<IUser> {
    return UserModel.findOne({ fullName }).select('-password');
  }

  public async createUser(user: IUser): MaybePromise<IUser> {
    const newUser = new UserModel({ user });
    return newUser.save();
  }

  public async updatePassword({
    id,
    password,
  }: {
    id: string;
    password: string;
  }): MaybePromise<IUser> {
    return UserModel.findByIdAndUpdate(id, { password }, { new: true });
  }

  public async deleteUser(id: string): MaybePromise<IUser> {
    return UserModel.findByIdAndDelete(id);
  }

  public async getUserStats(lastYear: Date): MaybePromise<IUser[]> {
    return UserModel.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: { month: { $month: '$createdAt' } },
      },
      { $group: { _id: '$month', total: { $sum: 1 } } },
    ]);
  }
}
