
import { IsString, IsNotEmpty, IsArray, ValidateNested, IsOptional} from "class-validator";
import { Type } from 'class-transformer';
import { InvoiceDetailDto } from "./invoice-detail.dto";

export class CreateInvoiceDto {
    
    @IsNotEmpty()
    @IsString()
    readonly customerId: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly date: string;

    @IsNotEmpty()
    @IsArray()
    @ValidateNested()
    @Type(() => InvoiceDetailDto)
    readonly details: InvoiceDetailDto[]

}
