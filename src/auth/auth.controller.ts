import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dtos/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async login(@Body() user: CreateUserDto) {
    const validatedUser = await this.authService.validateUser(
      user.email,
      user.password,
    );
    if (!validatedUser) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(validatedUser);
  }
}
