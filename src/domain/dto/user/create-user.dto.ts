import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    email: string;


    @IsString()
    name: string;

}