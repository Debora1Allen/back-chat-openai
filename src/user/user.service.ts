import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
  private users: CreateUserDto[] = [];

  findAll(): CreateUserDto[] {
    return this.users;
  }

  create(user: CreateUserDto) {
    this.users.push(user);
    return user;
  }
  findByUsername(username: string): CreateUserDto | undefined {
    return this.users.find((user) => user.name === username);
  }
}
