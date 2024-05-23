import { IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateAttatchDto } from "../atatch/create-attatch.dto";
import { Type } from "class-transformer";

export class CreatePresetDto {
    @IsString()
    subject: string;


    @IsString()
    html: string;

    @IsString()
    list: string;

    @IsOptional()
    files: CreateAttatchDto[];

    @IsString()
    title: string;

    @IsString()
    body: string;

}