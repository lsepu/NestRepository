import { PartialType } from '@nestjs/mapped-types';
import { CreateInvoiceDto } from './create-invoice.dto';
import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class UpdateInvoiceDto extends PartialType(CreateInvoiceDto) {



}
