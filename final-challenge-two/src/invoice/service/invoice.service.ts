import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateInvoiceDto } from "../dto/create-invoice.dto";
import { UpdateInvoiceDto } from "../dto/update-invoice.dto";
import { InvoiceInterface } from "../interfaces/invoice.interface";
import { v4 as uuid } from "uuid";

@Injectable()
export class InvoiceService {
  private invoiceArray: InvoiceInterface[] = [
    {
      id: uuid(),
      customerId: uuid(),
      date: new Date().toLocaleDateString("es-CO"),
      details: [
        {
          product: {
            id: uuid(),
            name: "Carrot",
            price: 20
          },
          quantity: 2
        },
        {
          product: {
            id: uuid(),
            name: "Chocolate",
            price: 20
          },
          quantity: 2
        }
      ],
      total: 80
    },
    {
      id: uuid(),
      customerId: uuid(),
      date: new Date().toLocaleDateString("es-CO"),
      details: [
        {
          product: {
            id: uuid(),
            name: "Carrot",
            price: 20
          },
          quantity: 2
        }
      ],
      total: 40
    }
  ];

  create(invoiceDto: CreateInvoiceDto): InvoiceInterface {
    const id = uuid();
    const total = invoiceDto.details.reduce(
      (sum, detail) => sum + detail.product.price * detail.quantity,
      0
    );

    const date = new Date().toLocaleDateString("es-CO");
    const newInvoice = { id, date, ...invoiceDto, total };
    this.invoiceArray.push(newInvoice);
    return newInvoice;
  }

  findAll() {
    return this.invoiceArray;
  }

  findOne(id: string) {
    const invoice = this.invoiceArray.find((invoice) => invoice.id == id);

    if (!invoice)
      throw new NotFoundException(`invoice with id '${id}' not found`);

    return invoice;
  }

  update(id: string, invoiceDto: CreateInvoiceDto | UpdateInvoiceDto) {
    let invoiceDB = this.findOne(id);

    const total = invoiceDto.details.reduce(
      (sum, detail) => sum + detail.product.price * detail.quantity,
      0
    );

    this.invoiceArray = this.invoiceArray.map((invoice) => {
      if (invoice.id === id) {
        invoiceDB = { ...invoiceDB, ...invoiceDto, total };
        return invoiceDB;
      }
      return invoice;
    });

    return invoiceDB;
  }

  remove(id: string) {
    let invoiceDB = this.findOne(id);

    const filteredArray = this.invoiceArray.filter(
      (invoice) => invoice.id !== id
    );
    this.invoiceArray = [...filteredArray];
    return true;
  }
}
