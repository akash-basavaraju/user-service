import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name)
    private UserModel: Model<UserDocument>,
  ) {}

  async findOne(UserFilterQuery: FilterQuery<User>) {
    return this.UserModel.findOne(UserFilterQuery);
  }

  async findAll() {
    return this.UserModel.find();
  }

  async create(User: User) {
    const UserModel = new this.UserModel(User);
    return UserModel.save();
  }

  async remove(UserQueryFilter: FilterQuery<User>) {
    return this.UserModel.deleteOne(UserQueryFilter);
  }

  async findOneAndUpdate(
    UserQueryFilter: FilterQuery<User>,
    User: Partial<User>,
  ) {
    return this.UserModel.findOneAndUpdate(UserQueryFilter, User);
  }
}
