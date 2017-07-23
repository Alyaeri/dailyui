import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OneComponent } from './tasks/001.component';
import { TwoComponent } from './tasks/002.component';
import { ThreeComponent } from './tasks/003.component';
import { FourComponent } from './tasks/004.component';
import { FiveComponent } from './tasks/005.component';
import { SixComponent } from './tasks/006.component';
import { SevenComponent } from './tasks/007.component';
import { EightComponent } from './tasks/008.component';
import { NineComponent } from './tasks/009.component';
import { TenComponent } from './tasks/010.component';
import { ElevenComponent } from './tasks/011.component';
import { TwelveComponent } from './tasks/012.component';
import { ThirteenComponent } from './tasks/013.component';
import { FourteenComponent } from './tasks/014.component';
import { FifteenComponent } from './tasks/015.component';
import { SixteenComponent } from './tasks/016.component';
import { SeventeenComponent } from './tasks/017.component';
import { EighteenComponent } from './tasks/018.component';
import { NineteenComponent } from './tasks/019.component';
import { TwentyComponent } from './tasks/020.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '001', component: OneComponent},
      {path: '002', component: TwoComponent},
      {path: '003', component: ThreeComponent},
      {path: '004', component: FourComponent},
      {path: '005', component: FiveComponent},
      {path: '006', component: SixComponent},
      {path: '007', component: SevenComponent},
      {path: '008', component: EightComponent},
      {path: '009', component: NineComponent},
      {path: '010', component: TenComponent},
      {path: '011', component: ElevenComponent},
      {path: '012', component: TwelveComponent},
      {path: '013', component: ThirteenComponent},
      {path: '014', component: FourteenComponent},
      {path: '015', component: FifteenComponent},
      {path: '016', component: SixteenComponent},
      {path: '017', component: SeventeenComponent},
      {path: '018', component: EighteenComponent},
      {path: '019', component: NineteenComponent},
      {path: '020', component: TwentyComponent}
    ])
  ],
  exports: [ RouterModule ]
})
export class TasksRoutingModule {
}
