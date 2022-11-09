import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateCustomerDto } from "../dto/create-customer.dto";
import { UpdateCustomerDto } from "../dto/update-customer.dto";
import { CustomerInterface } from "../interfaces/customer.interface";
import { v4 as uuid } from "uuid";

@Injectable()
export class CustomerService {
  private customerArray: CustomerInterface[] = [
    {
      id: uuid(),
      name: "juan",
      lastName: "perez",
      phoneNumber: "310301203",
      mail: "juan@gmail.com"
    },
    {
      id: uuid(),
      name: "pedro",
      lastName: "perez",
      phoneNumber: "310301203",
      mail: "pedro@gmail.com"
    },
    {
      id: uuid(),
      name: "pepe",
      lastName: "perez",
      phoneNumber: "310301203",
      mail: "pepe@gmail.com"
    }
  ];

  create(customerDto: CreateCustomerDto): CustomerInterface{
    const id = uuid();
    const newCustomer = { id, ...customerDto };
    this.customerArray.push(newCustomer);
    return newCustomer;
  }

  findAll(): CustomerInterface[] {
    return this.customerArray;
  }

  findOne(id: string): CustomerInterface {
    const customer = this.customerArray.find((customer) => customer.id == id);

    if (!customer)
      throw new NotFoundException(`customer with id '${id}' not found`);

    return customer;
  }

  update(id: string, customerDto: CreateCustomerDto | UpdateCustomerDto): CustomerInterface {
    let customerDB = this.findOne(id);

    this.customerArray = this.customerArray.map((customer) => {
      if (customer.id === id) {
        customerDB = { ...customerDB, ...customerDto };
        return customerDB;
      }
      return customer;
    });

    return customerDB;
  }

  remove(id: string) {
    let customerDB = this.findOne(id);

    const filteredArray = this.customerArray.filter(
      (customer) => customer.id !== id
    );
    this.customerArray = [...filteredArray];
    return true;
  }
}
