import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repos';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepo.create(createUserDto);
  }

  findAll() {
    return this.userRepo.findAll();
  }

  findOne(userId: number) {
    return this.userRepo.findOne({ userId });
  }

  update(userId: number, updateUserDto: UpdateUserDto) {
    return this.userRepo.findOneAndUpdate({ userId }, updateUserDto);
  }

  remove(userId: number) {
    return this.userRepo.remove({ userId });
  }
}
