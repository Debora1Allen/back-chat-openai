import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chatgpt.module';

@Module({
  imports: [UsersModule, AuthModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
