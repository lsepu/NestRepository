import { isNotEmpty, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class ContactDto {

    @IsNotEmpty()
    @IsString()
    readonly usuarioUuid: string;

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly lastName?: string;

    @IsNotEmpty()
    @IsString()
    readonly phoneNumber: string;

    @IsNotEmpty()
    @IsString()
    readonly mail: string;



}