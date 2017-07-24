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
import { Ng2ScrollableModule } from 'ng2-scrollable';
import { Ng2UtilsModule } from 'ng2-utils';

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
    Ng2ScrollableModule,
    Ng2UtilsModule,
    SharedModule.forRoot()
  ],
  declarations: [ AppComponent ],
  providers: [ {
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  } ],
  bootstrap: [ AppComponent ]

})
export class AppModule {
}
