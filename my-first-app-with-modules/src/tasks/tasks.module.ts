import { Module } from '@nestjs/common';
import { TasksController } from './controller/tasks/tasks.controller';
import { TasksService } from './services/tasks/tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TasksService]
})
export class TasksModule {}
