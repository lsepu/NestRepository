import { Injectable, NotFoundException } from "@nestjs/common";
import { contactInterface } from "src/contacts/contacts.interface";
import { ContactUpdateDto } from "src/contacts/dto/contact-update.dto";
import { ContactDto } from "src/contacts/dto/contact.dto";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class ContactsService {
  private contactsArray: contactInterface[] = [
    {
      uuid: uuidv4(),
      usuarioUuid: "1",
      name: "juan",
      lastName: "perez",
      phoneNumber: "30240140",
      mail: "ajuan@gmail.com"
    },
    {
      uuid: uuidv4(),
      usuarioUuid: "2",
      name: "pedro",
      lastName: "perez",
      phoneNumber: "30240140",
      mail: "apedro@gmail.com"
    },
    {
      uuid: uuidv4(),
      usuarioUuid: "3",
      name: "luis",
      lastName: "perez",
      phoneNumber: "30240140",
      mail: "aluis@gmail.com"
    }
  ];


  getAllcontacts(): contactInterface[] {
    return this.contactsArray;
  }

  getContact(uuid: string): contactInterface {
    const contact = this.contactsArray.find((contact) => contact.uuid == uuid);

    if (!contact) throw new NotFoundException(`contact with id '${uuid}' not found`);

    return contact;
  }

  postContact(contact: ContactDto): contactInterface {
    const uuid = uuidv4();
    const newContact = { uuid, ...contact };
    this.contactsArray.push(newContact);
    return newContact;
  }

  updateContact(uuid: string, contactUpdated: ContactUpdateDto | ContactDto): contactInterface {
    let contactDB = this.getContact(uuid);

    this.contactsArray = this.contactsArray.map((contact) => {
      if (contact.uuid === uuid) {
        contactDB = { ...contactDB, ...contactUpdated };
        return contactDB;
      }
      return contact;
    });

    return contactDB;
  }

  deleteContact(uuid: string): boolean {
    let contactDB = this.getContact(uuid);

    const filteredArray = this.contactsArray.filter((contact) => contact.uuid !== uuid);
    this.contactsArray = [...filteredArray];
    return true;
  }

}
