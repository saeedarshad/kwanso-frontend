import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TasksService} from '../services/tasks.service';
import {DynamicFormService} from '@ng-dynamic-forms/core';

@Component({
  selector: 'app-delete-tasks',
  templateUrl: './delete-tasks.component.html',
  styleUrls: ['./delete-tasks.component.css']
})
export class DeleteTasksComponent implements OnInit {
  tasks = [];
  formGroup: any;
  formModel: any;
  showErrorMessage = false;

  constructor(private router: Router, private tasksService: TasksService, private dfs: DynamicFormService) {
  }

  ngOnInit(): void {
    this.tasks = this.tasksService.getTasks();
    this.createForm();
  }

  createForm(): void {
    const formFields = [];
    this.tasks.forEach(task => {
      formFields.push({
        type: 'CHECKBOX',
        id: `${task.id}`,
        name: task.name,
        label: '',
      });
    });
    this.formModel = this.dfs.fromJSON(formFields);
    this.formGroup = this.dfs.createFormGroup(this.formModel);
  }

  getFormModel(id): any {
    return this.formModel.filter(fm => fm.id === id.toString());
  }

  goToCreateTask(): void {
    this.router.navigate(['create-task']);
  }

  goToTasksList(): void {
    this.router.navigate(['list-tasks']);
  }

  bulkDeleteTask(): void {
    this.showErrorMessage = false;
    const selectedTasks = Object.keys(this.formGroup.value).map(v => Number(v)).filter(f => this.formGroup.value[f]);
    this.showErrorMessage = selectedTasks.length === 0;
    if (!this.showErrorMessage) {
      this.tasksService.deleteTasks(selectedTasks);
      this.tasks = this.tasksService.getTasks();
    }
  }
}
