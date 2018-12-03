import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InputModule } from './input.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SubmitComponent } from './submit.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
