import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UsersController } from './user.controller';

@Module({
  imports: [],
  providers: [UserService],
  controllers: [UsersController],
})
export class UsersModule {}
