import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgxAmbVideoRecorderComponent, NgxAmbVideoRecorderModule } from '../../../../dist/ngx-amb-video-recorder'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgxAmbVideoRecorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
