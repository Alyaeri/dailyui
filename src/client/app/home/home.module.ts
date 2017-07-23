import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { MapTypeStyle } from '@agm/core';
import { Ng2SimplePageScrollModule } from 'ng2-simple-page-scroll';

@NgModule({
  imports: [HomeRoutingModule, SharedModule, Ng2SimplePageScrollModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [NameListService]
})
export class HomeModule {
}
