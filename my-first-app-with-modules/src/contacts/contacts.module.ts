import { Module } from '@nestjs/common';
import { ContactsController } from './controller/contacts/contacts.controller';
import { ContactsService } from './services/contacts/contacts.service';

@Module({
  controllers: [ContactsController],
  providers: [ContactsService],
  exports: [ContactsService]
})
export class ContactsModule {}
