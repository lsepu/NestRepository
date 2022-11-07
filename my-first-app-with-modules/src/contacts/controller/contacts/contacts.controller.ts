import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Put } from '@nestjs/common';
import { contactInterface } from 'src/contacts/contacts.interface';
import { ContactUpdateDto } from 'src/contacts/dto/contact-update.dto';
import { ContactDto } from 'src/contacts/dto/contact.dto';
import { ContactsService } from 'src/contacts/services/contacts/contacts.service';

@Controller('contacts')
export class ContactsController {

    constructor(private readonly contactsService: ContactsService) {}

    
    @Get()
    getContacts(): contactInterface[] {
        return this.contactsService.getAllcontacts();
    }

    @Get(':uuid')
    getContact(@Param('uuid', new ParseUUIDPipe({ version: '4' })) uuid: string) {
        return this.contactsService.getContact(uuid);
    }

    @Delete(':uuid')
    deleteContact(@Param('uuid') uuid: string){
        return this.contactsService.deleteContact(uuid);
    }

    @Patch(':uuid')
    patchContact(@Param('uuid', new ParseUUIDPipe({ version: '4' })) uuid: string, @Body() Contact: ContactUpdateDto){
        return this.contactsService.updateContact(uuid, Contact);
    }

    @Put(':uuid')
    putContact(@Param('uuid', new ParseUUIDPipe({ version: '4' })) uuid: string, @Body() Contact: ContactDto){
        return this.contactsService.updateContact(uuid, Contact);
    }

    @Post()
    createContact(@Body() Contact: ContactDto){
        return this.contactsService.postContact(Contact);
    }

}
