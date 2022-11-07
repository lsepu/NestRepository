import { Injectable, NotFoundException } from "@nestjs/common";
import { UpdateUserDto } from "src/users/dto/update-user.dto";
import { UserDto } from "src/users/dto/user.dto";
import { userInterface } from "src/users/user.interface";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class UsersService {
  private userArray: userInterface[] = [
    {
      uuid: uuidv4(),
      name: "juan",
      lastName: "perez",
      mail: "juan@gmail.com"
    },
    {
      uuid: uuidv4(),
      name: "luis",
      lastName: "perez",
      mail: "luis@gmail.com"
    },
    {
      uuid: uuidv4(),
      name: "pepe",
      lastName: "perez",
      mail: "pepe@gmail.com"
    }
  ];

  getAllUsers(): userInterface[] {
    return this.userArray;
  }

  getUser(uuid: string): userInterface {
    const user = this.userArray.find((user) => user.uuid == uuid);

    if (!user) throw new NotFoundException(`User with id '${uuid}' not found`);

    return user;
  }

  postUser(user: UserDto): userInterface {
    const uuid = uuidv4();
    const newUser = { uuid, ...user };
    this.userArray.push(newUser);
    return newUser;
  }

  updateUser(uuid: string, userUpdated: UpdateUserDto | UserDto): userInterface {
    let userDB = this.getUser(uuid);

    this.userArray = this.userArray.map((user) => {
      if (user.uuid === uuid) {
        userDB = { ...userDB, ...userUpdated };
        return userDB;
      }
      return user;
    });

    return userDB;
  }

  deleteUser(uuid: string): boolean {
    let userDB = this.getUser(uuid);

    const filteredArray = this.userArray.filter((user) => user.uuid !== uuid);
    this.userArray = [...filteredArray];
    return true;
  }


}
