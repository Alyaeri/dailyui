import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OneComponent } from './tasks/001.component';
import { TwoComponent } from './tasks/002.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '001', component: OneComponent},
      {path: '002', component: TwoComponent}
    ])
  ],
  exports: [ RouterModule ]
})
export class TasksRoutingModule {
}
