import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgxAmbVideoRecorderModule } from '../../../../dist/ngx-amb-video-recorder'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAmbVideoRecorderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
