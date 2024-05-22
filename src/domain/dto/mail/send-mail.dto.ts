import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, MinLength, ValidateNested } from "class-validator";
import { CreateAttatchDto } from "../atatch/create-attatch.dto";

export class SendMailDto {

    @IsString()
    to: string[];

    @IsString()
    subject: string;

    @IsString()
    html: string;

    @IsString()
    body: string;

    @IsString()
    title: string;

    @ValidateNested()
    @Type(() => CreateAttatchDto)
    attachments: CreateAttatchDto[];

}