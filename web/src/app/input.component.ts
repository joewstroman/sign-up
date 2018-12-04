import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faDizzy, faSmileBeam } from '@fortawesome/free-regular-svg-icons';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { initialState, IAppState, UPDATE } from './store';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
  })

export class InputComponent implements OnInit {
    @Output() update = new EventEmitter<{name: string, valid: boolean}>();

    @Input() clear: Subject<void>;
    @Input() name: string;
    @Input() placeholder: string;
    @Input() type: string;
    @Input() valid: boolean;

    @Input()
    validate: (value: string) => boolean;

    value: any;
    faDizzy = faDizzy;
    faSmileBeam = faSmileBeam;
    store: Store<IAppState>;

    constructor(store: Store<IAppState>) {
        this.store = store;
    }

    ngOnInit() {
        this.clear.subscribe(() => {
            this.value = initialState[this.name];
            this.onChange(this.value);
        });
    }

    onChange(value: string) {
        this.store.dispatch({ type: UPDATE, payload: { [this.name]: value }});
        this.update.emit({ name: this.name, valid: this.validate(value) });
    }
}
