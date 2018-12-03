import { Component, Input } from '@angular/core';
import { faDizzy, faSmileBeam } from '@fortawesome/free-regular-svg-icons';
import { Store } from '@ngrx/store';
import { IAppState, UPDATE } from './store';
// import { IAppState } from './store';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
  })

export class InputComponent {
    @Input()
    name: string;
    @Input()
    placeholder: string;
    @Input()
    type: string;
    @Input()
    validate: () => boolean;

    faDizzy = faDizzy;
    faSmileBeam = faSmileBeam;
    store: Store<IAppState>;

    constructor(store: Store<IAppState>) {
        this.store = store;
    }

    onChange(value: string) {
        this.store.dispatch({ type: UPDATE, payload: { [this.name]: value }});
    }
}
