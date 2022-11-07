import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Put } from '@nestjs/common';
import { TaskDto } from 'src/tasks/dto/task.dto';
import { UpdateTaskDto } from 'src/tasks/dto/update-task.dto';
import { TasksService } from 'src/tasks/services/tasks/tasks.service';
import { taskInterface } from 'src/tasks/task.interface';

@Controller('tasks')
export class TasksController {

    constructor(private readonly tasksService: TasksService) {}

    
    @Get()
    getTasks(): taskInterface[] {
        return this.tasksService.getAlltasks();
    }

    @Get(':uuid')
    gettask(@Param('uuid', new ParseUUIDPipe({ version: '4' })) uuid: string) {
        return this.tasksService.getTask(uuid);
    }

    @Delete(':uuid')
    deletetask(@Param('uuid') uuid: string){
        return this.tasksService.deleteTask(uuid);
    }

    @Patch(':uuid')
    patchtask(@Param('uuid', new ParseUUIDPipe({ version: '4' })) uuid: string, @Body() task: UpdateTaskDto){
        return this.tasksService.updateTask(uuid, task);
    }

    @Put(':uuid')
    puttask(@Param('uuid', new ParseUUIDPipe({ version: '4' })) uuid: string, @Body() task: TaskDto){
        return this.tasksService.updateTask(uuid, task);
    }

    @Post()
    createtask(@Body() task: TaskDto){
        return this.tasksService.postTask(task);
    }
    
}
