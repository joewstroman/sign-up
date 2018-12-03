import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { validate as emailValidator } from 'email-validator';
import { Observable } from 'rxjs';
import { IAppState, initialState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  state$: Observable<IAppState>;
  password: string;
  propertyIsValid = {};
  stateIsValid = false;

  constructor(store: Store<IAppState>) {
    this.state$ = store.select('form');
    this.state$.subscribe( (state: IAppState) => {
      this.password = state.password;
    });

    Object.keys(initialState).map( (name: string) => {
      this.propertyIsValid[name] = false;
    });
  }

  confirmPassword(value: string) {
    return value === this.password;
  }

  ensureAllPropertiesAreValid() {
    for (const key of Object.keys(initialState)) {
      if (!this.propertyIsValid[key]) {
        return false;
      }
    }
    return true;
  }

  register(name: string, value: boolean = true) {
    this.propertyIsValid[name] = value;
    this.stateIsValid = this.ensureAllPropertiesAreValid();
  }

  // For consistency validateEmail is defined as a function
  // instead of being assigned to the imported email validator
  validateEmail(email: string) {
    return emailValidator(email);
  }

  validateName(name: string) {
    return (name === undefined) ? false : name.length > 0;
  }

  validateTOS(checked: any) {
    this.register('tos', checked);
  }
}
