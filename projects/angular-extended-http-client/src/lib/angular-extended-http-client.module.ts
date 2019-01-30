import { NgModule } from '@angular/core';
//import { AngularExtendedHttpClientComponent } from './angular-extended-http-client.component';

import { HttpClientExt } from '../lib/angular-extended-http-client.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [ HttpClientModule ],
  providers: [ HttpClientExt ]  
})
export class HttpClientExtModule { }
