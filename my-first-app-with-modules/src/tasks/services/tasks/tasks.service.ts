import { Injectable, NotFoundException } from "@nestjs/common";
import { TaskDto } from "src/tasks/dto/task.dto";
import { UpdateTaskDto } from "src/tasks/dto/update-task.dto";
import { taskInterface } from "src/tasks/task.interface";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class TasksService {
  private taskArray: taskInterface[] = [
    {
      uuid: uuidv4(),
      usuarioUuid: "1",
      task: "task #1"
    },
    {
      uuid: uuidv4(),
      usuarioUuid: "2",
      task: "task #2"
    },
    {
      uuid: uuidv4(),
      usuarioUuid: "3",
      task: "task #3"
    }
  ];

  getMessage(): string {
    return "Hola desde el servicio de Tasks";
  }

  getAlltasks(): taskInterface[] {
    return this.taskArray;
  }

  getTask(uuid: string): taskInterface {
    const task = this.taskArray.find((task) => task.uuid == uuid);

    if (!task) throw new NotFoundException(`task with id '${uuid}' not found`);

    return task;
  }

  postTask(task: TaskDto): taskInterface {
    const uuid = uuidv4();
    const newtask = { uuid, ...task };
    this.taskArray.push(newtask);
    return newtask;
  }

  updateTask(uuid: string, taskUpdated: TaskDto | UpdateTaskDto): taskInterface {
    let taskDB = this.getTask(uuid);

    this.taskArray = this.taskArray.map((task) => {
      if (task.uuid === uuid) {
        taskDB = { ...taskDB, ...taskUpdated };
        return taskDB;
      }
      return task;
    });

    return taskDB;
  }

  deleteTask(uuid: string): boolean {
    let taskDB = this.getTask(uuid);

    const filteredArray = this.taskArray.filter((task) => task.uuid !== uuid);
    this.taskArray = [...filteredArray];
    return true;
  }
}
