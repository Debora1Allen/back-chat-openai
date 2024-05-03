import { HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateChatDto } from './dto/create-chat.dto';
import { ChatResponse } from './dto/response-chat.dto';

@Injectable()
export class ChatService {
  private readonly apiKey: string;
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }
  async generateTextGPT3({ prompt }: CreateChatDto) {
    return this.generateText({ prompt, model: 'text-davinci-003' });
  }
  async generateText({ prompt, model }: CreateChatDto) {
    try {
      const response = await axios.post<ChatResponse>(
        'https://api.openai.com/v1/completions',
        {
          model,
          prompt,
          temperature: 1,
          max_tokens: 100,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${this.apiKey}`,
          },
        },
      );
      return response.data;
    } catch (error: any) {
      throw new HttpException('Failed to generate text', error.response.status);
    }
  }
}
