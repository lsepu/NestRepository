import { Controller, Get } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    @Get('message')
    getMessage(): string {
        return this.usersService.getMessage();
    }

}
