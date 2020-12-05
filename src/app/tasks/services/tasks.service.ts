import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() {
  }

  getTasks(): any {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  }

  createTask(name): void {
    const tasks = this.getTasks();
    tasks.push({
      id: tasks.length > 0 ? tasks.length + 1 : 1,
      name
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  deleteTasks(ids): void {
    const tasks = this.getTasks();
    localStorage.setItem('tasks', JSON.stringify(tasks.filter(t => !(ids.includes(t.id)))));
  }
}
