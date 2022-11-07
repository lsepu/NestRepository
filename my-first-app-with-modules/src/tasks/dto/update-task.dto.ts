import { IsNotEmpty, IsOptional, IsString } from "class-validator";


export class UpdateTaskDto {

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly usuarioUuid?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly task: string;



}