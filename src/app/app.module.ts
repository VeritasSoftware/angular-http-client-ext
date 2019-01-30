import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfigModule } from './app-config.module';
import { HttpClientExtModule } from 'projects/angular-extended-http-client/src/public_api';
import { RacingService } from './services/racing-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppConfigModule,
    HttpClientExtModule
  ],
  providers: [RacingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
