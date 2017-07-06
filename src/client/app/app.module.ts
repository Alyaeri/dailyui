import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { GalleryConfig, GalleryModule } from 'ng-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2ScrollimateModule } from 'ng2-scrollimate';
import { MdTabsModule, MdSidenavModule, MdIconModule, MdButtonModule } from '@angular/material';
import { TasksModule } from './tasks/tasks.module';

export const galleryConfig: GalleryConfig = {
  'style': {
    'background': 'white',
    'width': '80vw',
    'height': '40vw'
  },
  'animation': 'fade',
  'loader': {
    'width': '50px',
    'height': '50px',
    'position': 'center',
    'icon': 'oval'
  },
  'description': false,
  'bullets': false,
  'player': {
    'autoplay': false,
    'speed': 3000
  },
  'thumbnails': false,
  'navigation': true
};

@NgModule({
  imports: [ BrowserModule,
    HttpModule,
    CommonModule,
    AppRoutingModule,
    TasksModule,
    HomeModule,
    BrowserAnimationsModule,
    MdTabsModule,
    MdSidenavModule,
    MdIconModule,
    MdButtonModule,
    Ng2ScrollimateModule,
    GalleryModule.forRoot(galleryConfig),
    SharedModule.forRoot()],
  declarations: [ AppComponent ],
  providers: [ {
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  } ],
  bootstrap: [ AppComponent ]

})
export class AppModule {
}
