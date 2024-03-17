import { IsString, MinLength } from "class-validator";

export class CreatePostDto {
  @IsString()
  @MinLength(3)
  id: string;
}
