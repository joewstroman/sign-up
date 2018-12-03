import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './store';

@Component({
    selector: 'app-submit',
    templateUrl: './submit.component.html',
    styleUrls: ['./submit.component.scss']
  })

export class SubmitComponent {
    store: Store<IAppState>;
    @Input()
    stateIsValid: boolean;

    constructor(store: Store<IAppState>) {
        this.store = store;
        // this.store.subscribe((state: IAppState) => {
        //     console.log(state)
        // });
    }

    submit() {
        console.log('submitting');
        console.log(this.stateIsValid);
    }
}
