import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { validate } from 'email-validator';
import { Observable } from 'rxjs';
import { IAppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  state$: Observable<IAppState>;
  password: string;

  constructor(store: Store<IAppState>) {
    this.state$ = store.select('form');
    this.state$.subscribe( (state: IAppState) => {
      this.password = state.password;
    });
  }

  confirmPassword(value: string) {
    return value === this.password;
  }

  validateEmail(email: string) {
    return validate(email);
  }

  validateName(name: string) {
    return (name === undefined) ? false : name.length > 0;
  }
}
