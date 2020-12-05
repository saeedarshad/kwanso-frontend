import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TasksListComponent} from './tasks-list/tasks-list.component';
import {DeleteTasksComponent} from './delete-tasks/delete-tasks.component';
import {CreateTaskComponent} from './create-task/create-task.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-tasks',
  },
  {
    path: 'list-tasks',
    component: TasksListComponent,
  },
  {
    path: 'create-task',
    component: CreateTaskComponent,
  },
  {
    path: 'bulk-delete',
    component: DeleteTasksComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule {
}
