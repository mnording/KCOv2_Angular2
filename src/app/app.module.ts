import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './app.component';
import {CheckoutService} from "./checkout.service";

@NgModule({
  imports:      [ BrowserModule ,HttpModule,],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ CheckoutService ]
})
export class AppModule { }
