import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './store';

@Component({
    selector: 'app-submit',
    templateUrl: './submit.component.html',
    styleUrls: ['./submit.component.scss']
  })

export class SubmitComponent {
    state$: IAppState;
    @Input()
    stateIsValid: boolean;

    constructor(store: Store<IAppState>) {
        store.subscribe((state: IAppState) => {
            this.state$ = state;
        });
    }

    submit() {
        if (this.stateIsValid) {
            // Send state to db with service
        }
    }
}
