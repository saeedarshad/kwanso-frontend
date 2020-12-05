import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DeleteTasksComponent } from './delete-tasks/delete-tasks.component';
import {TasksRoutingModule} from './tasks-routing.module';
import {TasksService} from './services/tasks.service';
import {DynamicFormsNGBootstrapUIModule} from '@ng-dynamic-forms/ui-ng-bootstrap';
import {DynamicFormsCoreModule} from '@ng-dynamic-forms/core';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [TasksListComponent, CreateTaskComponent, DeleteTasksComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ReactiveFormsModule,
    DynamicFormsCoreModule,
    DynamicFormsNGBootstrapUIModule,
  ],
  providers: [TasksService]
})
export class TasksModule { }
