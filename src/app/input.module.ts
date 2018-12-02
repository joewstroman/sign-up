import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    FormsModule,
    FontAwesomeModule
  ],
  exports: [InputComponent],
  providers: [],
  bootstrap: [InputComponent]
})
export class InputModule { }
