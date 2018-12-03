import { Component, EventEmitter, Input, Output } from '@angular/core';
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
    @Output() update = new EventEmitter<{name: string, valid: boolean}>();

    @Input()
    name: string;
    @Input()
    placeholder: string;
    @Input()
    type: string;
    @Input()
    validate: (value: string) => boolean;
    @Input()
    valid: boolean;

    faDizzy = faDizzy;
    faSmileBeam = faSmileBeam;
    store: Store<IAppState>;

    constructor(store: Store<IAppState>) {
        this.store = store;
    }

    onChange(value: string) {
        this.store.dispatch({ type: UPDATE, payload: { [this.name]: value }});
        this.update.emit({ name: this.name, valid: this.validate(value) });
    }
}
