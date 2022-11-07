import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { userInterface } from 'src/users/user.interface';

@Controller('user')
//@UsePipes( ValidationPipe )
export class UsersController {

    constructor(private readonly usersService: UsersService){}


    @Get()
    getUsers(): userInterface[] {
        return this.usersService.getAllUsers();
    }

    @Get(':uuid')
    getUser(@Param('uuid', new ParseUUIDPipe({ version: '4' })) uuid: string) {
        return this.usersService.getUser(uuid);
    }

    @Delete(':uuid')
    deleteUser(@Param('uuid') uuid: string){
        return this.usersService.deleteUser(uuid);
    }

    @Patch(':uuid')
    patchUser(@Param('uuid', new ParseUUIDPipe({ version: '4' })) uuid: string, @Body() user: UpdateUserDto){
        return this.usersService.updateUser(uuid, user);
    }

    @Put(':uuid')
    putUser(@Param('uuid', new ParseUUIDPipe({ version: '4' })) uuid: string, @Body() user: UserDto){
        return this.usersService.updateUser(uuid, user);
    }

    @Post()
    createUser(@Body() user: UserDto){
        return this.usersService.postUser(user);
    }


}
