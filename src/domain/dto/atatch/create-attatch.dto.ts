import { IsString } from "class-validator";

export class CreateAttatchDto {

    @IsString()
    filename: string;

    @IsString()
    content: string;

    @IsString()
    disposition: string;

}