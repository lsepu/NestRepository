import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    getMessage(): string {
        return 'Hola desde el servicio de Users';
    }

}
