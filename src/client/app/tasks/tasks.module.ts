import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MdSidenavModule, MdTabsModule, MdIconModule, MdButtonModule } from '@angular/material';
import { OneComponent } from './tasks/001.component';
import { TasksRoutingModule } from './tasks-routing.module';
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
  imports: [ CommonModule, TasksRoutingModule, SharedModule, MdTabsModule,
    MdSidenavModule, MdIconModule, MdButtonModule ],
  declarations: [ OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    SixComponent,
    SevenComponent,
    EightComponent,
    NineComponent,
    TenComponent,
    ElevenComponent,
    TwelveComponent,
    ThirteenComponent,
    FourteenComponent,
    FifteenComponent,
    SixteenComponent,
    SeventeenComponent,
    EighteenComponent,
    NineteenComponent,
   TwentyComponent
  ],
  exports: []
})
export class TasksModule {
}
