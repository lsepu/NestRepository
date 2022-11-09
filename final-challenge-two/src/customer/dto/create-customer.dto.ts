import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class CreateCustomerDto {

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly lastName: string;

    @IsNotEmpty()
    @IsString()
    readonly phoneNumber: string;

    @IsNotEmpty()
    @IsString()
    readonly mail: string;


}
