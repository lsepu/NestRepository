import { Module } from '@nestjs/common';
import { InvoiceService } from './service/invoice.service';
import { InvoiceController } from './controller/invoice.controller';

@Module({
  controllers: [InvoiceController],
  providers: [InvoiceService]
})
export class InvoiceModule {}
