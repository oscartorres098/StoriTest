import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateFileDto {

    @IsString()
    subjet: string;


    @IsString()
    body: string;

    @IsString()
    files: string[];

}