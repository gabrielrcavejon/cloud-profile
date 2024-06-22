import { User } from "../entities/user.entity";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto extends User {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsOptional()
  curriculum: string

  @IsString()
  @IsOptional()
  socialnetwork: string

  @IsString()
  @IsOptional()
  image: string
}
