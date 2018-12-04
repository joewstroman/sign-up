import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './store';
import { SignUpService } from './app.service';

@Component({
    selector: 'app-submit',
    templateUrl: './submit.component.html',
    styleUrls: ['./submit.component.scss'],
    providers: [SignUpService]
  })

export class SubmitComponent {
    state: IAppState;
    @Input()
    stateIsValid: boolean;
    signUpService: SignUpService;

    constructor(signUpService: SignUpService, store: Store<IAppState>) {
        store.select('form').subscribe((state: IAppState) => {
            this.signUpService = signUpService;
            this.state = state;
        });
    }

    submit() {
        if (this.stateIsValid) {
            this.signUpService.authenticateNewUser(this.state);
        }
    }
}
