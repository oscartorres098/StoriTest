import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";
import { CreateAttatchDto } from "../atatch/create-attatch.dto";

export class SendMailDto {

    @IsString()
    to: string;

    @IsString()
    subject: string;

    @IsOptional()
    @IsString()
    html: string;

    @IsOptional()
    @IsString()
    body: string;

    @IsOptional()
    @IsString()
    title: string;

    @IsOptional()
    @ValidateNested()
    @Type(() => CreateAttatchDto)
    attachments: CreateAttatchDto[];

}