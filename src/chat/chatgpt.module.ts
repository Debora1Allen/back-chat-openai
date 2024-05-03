import { DynamicModule, Global, Module } from '@nestjs/common';
import { ChatService } from './chat.services';

@Global()
@Module({
  exports: [ChatService],
  providers: [ChatService],
})
export class ChatModule {
  static forRoot(apiKey: string): DynamicModule {
    return {
      module: ChatModule,
      providers: [
        {
          provide: ChatService,
          useFactory: () => {
            return new ChatService(apiKey);
          },
        },
      ],
    };
  }
}
