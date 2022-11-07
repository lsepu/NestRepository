import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class UserDto {

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly lastName?: string;

    @IsNotEmpty()
    @IsString()
    readonly mail: string;


}