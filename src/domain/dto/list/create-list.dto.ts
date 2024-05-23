import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";
import { CreateAttatchDto } from "../atatch/create-attatch.dto";

export class CreateListDto {

    @IsString()
    name: string;

    @IsOptional()
    mails: string[];

}