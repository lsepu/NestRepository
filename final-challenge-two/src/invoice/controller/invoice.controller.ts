import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { InvoiceService } from '../service/invoice.service';
import { CreateInvoiceDto } from '../dto/create-invoice.dto';
import { UpdateInvoiceDto } from '../dto/update-invoice.dto';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  create(@Body() createInvoiceDto: CreateInvoiceDto) {
    return this.invoiceService.create(createInvoiceDto);
  }

  @Get()
  findAll() {
    return this.invoiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invoiceService.findOne(id);
  }

  @Put(':id')
  putUser(@Param('id') id: string, @Body() invoiceDto: CreateInvoiceDto){
    return this.invoiceService.update(id, invoiceDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvoiceDto: UpdateInvoiceDto) {
    return this.invoiceService.update(id, updateInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invoiceService.remove(id);
  }
}
