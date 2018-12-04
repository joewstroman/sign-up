import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store';

import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignUpService } from './app.service';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    StoreModule.forRoot({ form: reducer })
  ],
  exports: [InputComponent],
  providers: [SignUpService],
})
export class InputModule { }
