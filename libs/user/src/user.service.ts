import { Injectable } from '@nestjs/common';
import { UserRepository } from '@app/user/user.repository';
import { User } from '@app/models';
import { CreateUserDto } from '@app/dtos';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {
  }

  async getAll(): Promise<User[]> {
    return this.userRepository.find({})
  }

  async create(dto: CreateUserDto): Promise<User> {
    return this.userRepository.create(dto)
  }
}
