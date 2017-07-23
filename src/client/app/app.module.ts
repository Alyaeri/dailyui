import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdTabsModule, MdSidenavModule, MdIconModule, MdButtonModule } from '@angular/material';
import { Ng2SimplePageScrollModule } from 'ng2-simple-page-scroll';

@NgModule({
  imports: [ BrowserModule,
    HttpModule,
    CommonModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    MdTabsModule,
    MdSidenavModule,
    MdIconModule,
    MdButtonModule,
    SharedModule.forRoot(),
    Ng2SimplePageScrollModule.forRoot()],
  declarations: [ AppComponent ],
  providers: [ {
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  } ],
  bootstrap: [ AppComponent ]

})
export class AppModule {
}
