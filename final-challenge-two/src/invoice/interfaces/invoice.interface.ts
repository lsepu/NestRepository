import { InvoiceDetailDto } from "../dto/invoice-detail.dto";
import { ProductInterface } from "./product.interface";

export interface InvoiceInterface {
    id: string,
    customerId: string,
    date: string,
    details: InvoiceDetailDto[],
    total: number
}
