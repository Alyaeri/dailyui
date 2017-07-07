import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OneComponent } from './tasks/001.component';
import { TwoComponent } from './tasks/002.component';
import { ThreeComponent } from './tasks/003.component';
import { FourComponent } from './tasks/004.component';
import { FiveComponent } from './tasks/005.component';
import { SixComponent } from './tasks/006.component';
import { SevenComponent } from './tasks/007.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '001', component: OneComponent},
      {path: '002', component: TwoComponent},
      {path: '003', component: ThreeComponent},
      {path: '004', component: FourComponent},
      {path: '005', component: FiveComponent},
      {path: '006', component: SixComponent},
      {path: '007', component: SevenComponent}
    ])
  ],
  exports: [ RouterModule ]
})
export class TasksRoutingModule {
}
