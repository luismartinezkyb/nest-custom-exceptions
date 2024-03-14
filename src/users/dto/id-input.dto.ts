import { IsNotEmpty, IsString } from "class-validator";

export class IdInput {
  @IsString()
  @IsNotEmpty({
    message: 'Please enter a valid string',
  })
  id: string;
}
