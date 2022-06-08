import { IsString } from '@nestjs/class-validator';

export class CreateMessageDto {
  @IsString()
  content: string;
}
