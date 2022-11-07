import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class UpdateUserDto {

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly name?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly lastName?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly mail?: string;

}