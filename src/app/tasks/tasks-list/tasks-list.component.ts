import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TasksService} from '../services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks = [];

  constructor(private router: Router, private tasksService: TasksService) {
  }

  ngOnInit(): void {
    this.tasks = this.tasksService.getTasks();
  }

  goToCreateTask(): void {
    this.router.navigate(['create-task']);
  }

  goToBulkDeleteTask(): void {
    this.router.navigate(['bulk-delete']);
  }
}
