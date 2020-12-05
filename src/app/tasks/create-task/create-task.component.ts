import {Component, OnInit} from '@angular/core';
import {TasksService} from '../services/tasks.service';
import {Router} from '@angular/router';
import {DynamicFormService} from '@ng-dynamic-forms/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  formGroup: any;
  formModel: any;

  constructor(private router: Router, private tasksService: TasksService, private dfs: DynamicFormService) {
  }

  ngOnInit(): void {
    const model = [
      {
        type: 'INPUT',
        id: 'name',
        label: '',
        placeholder: 'Name',
        required: true,
        validators: {
          required: null
        },
        errorMessages: {
          required: 'Name is required.'
        }
      }
    ];
    this.formModel = this.dfs.fromJSON(model);
    this.formGroup = this.dfs.createFormGroup(this.formModel);
  }

  createTask(redirect = false): void {
    this.formGroup.markAllAsTouched();
    this.dfs.detectChanges();
    if (this.formGroup.valid) {
      this.tasksService.createTask(this.formGroup.value.name);
      this.formGroup.reset();
      if (redirect) {
        this.router.navigate(['list-tasks']);
      }
    }
  }
}
