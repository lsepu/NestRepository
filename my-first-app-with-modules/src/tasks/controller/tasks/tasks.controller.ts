import { Controller, Get } from '@nestjs/common';
import { TasksService } from 'src/tasks/services/tasks/tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private readonly tasksService: TasksService) {}

    @Get('message')
    getMessage(): string {
        return this.tasksService.getMessage();
    }
    
}
