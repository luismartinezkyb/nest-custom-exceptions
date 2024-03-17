import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class IdInput {
  @IsString()
  @MinLength(3)
  // @IsNotEmpty({
  //   message: 'Please enter a valid string',
  // })
  id: string;
}
