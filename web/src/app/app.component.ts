import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { validate as emailValidator } from 'email-validator';
import { Subject } from 'rxjs';
import { IAppState, initialState, UPDATE } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  store: Store<IAppState>;
  clear: Subject<void>;
  password: string;
  propertyIsValid = {};
  stateIsValid = false;
  tos: boolean;

  constructor(store: Store<IAppState>) {
    this.store = store;
    const state$ = store.select('form');

    this.clear = new Subject();

    state$.subscribe( (state: IAppState) => {
      this.password = state.password;
    });

    Object.keys(initialState).map( (name: string) => {
      this.propertyIsValid[name] = false;
    });
  }

  allPropertiesAreValid() {
    for (const key of Object.keys(initialState)) {
      if (!this.propertyIsValid[key]) {
        return false;
      }
    }
    return true;
  }

  cancel() {
    this.tos = false;
    this.validateTOS(this.tos);
    this.clear.next();
  }

  confirmPassword(value: string) {
    return value === this.password;
    // return this.validatePassword(value) && value === this.password;
  }

  register({name, valid}: {name: string, valid: boolean} ) {
    this.propertyIsValid[name] = valid;
    this.stateIsValid = this.allPropertiesAreValid();
  }

  // For consistency validateEmail is defined as a function
  // instead of being assigned to the imported email validator
  validateEmail(email: string) {
    return emailValidator(email);
  }

  validateName(name: string) {
    return (name === undefined) ? false : name.length > 0;
  }

  validatePassword(pass: string) {
    if (pass.length < 6) {
      console.log('too short');
      return false;
    }

    if (!pass.match(/\d/)) {
      console.log('no number');
      return false;
    }

    if (!pass.match(/[A-Z]/)) {
      console.log('no uppercase');
      return false;
    }

    if (!pass.match(/[\W_]/)) {
      console.log('no special');
      return false;
    }

    return true;
  }

  validateTOS(checked: any) {
    this.store.dispatch({ type: UPDATE, payload: { tos: checked }});
    this.register({name: 'tos', valid: checked});
  }
}
