

import { IsString, IsNotEmpty, IsInt} from "class-validator";
import { ProductInterface } from "../interfaces/product.interface";

export class InvoiceDetailDto {

    @IsNotEmpty()
    readonly product: ProductInterface;

    @IsInt()
    @IsNotEmpty()
    readonly quantity: number;



}