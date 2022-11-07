import { IsNotEmpty, IsOptional, IsString } from "class-validator";


export class TaskDto {

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly usuarioUuid?: string;

    @IsNotEmpty()
    @IsString()
    readonly task: string;



}