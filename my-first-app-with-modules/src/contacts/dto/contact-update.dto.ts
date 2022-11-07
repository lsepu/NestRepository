import { IsNotEmpty, IsOptional, IsString } from "class-validator";


export class ContactUpdateDto {

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly usuarioUuid: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly lastName: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly phoneNumber?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly mail: string;

}