import { Component } from '@angular/core';
import { validate } from 'email-validator';

interface IChangeEvent {
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  password: string;

  validateEmail = validate;
  // cancel() {
  //   for (let i = 0; i < this.values.length; i++) {
  //     this[this.values[i]] = '';
  //   }
  // }

  submit() {
    // for (let i = 0; i < this.values.length; i++) {
    //   if (this[this.values[i]] === '') {

    //   }
    // }
  }

  // USE REDUX
  validateName(name: string) {
    return (name === undefined) ? false : name.length > 0;
  }

  confirmPassword(value: string) {
    return value === this.password;
  }

  updatePassword(event: IChangeEvent) {
    this.password = event.value;
  }
}
