import { Component, Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faDizzy, faEye, faEyeSlash, faSmileBeam } from '@fortawesome/free-regular-svg-icons';
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
    @Input() secret: boolean;
    @Input() valid: boolean;

    @Input()
    validate: (value: string) => boolean;

    faDizzy = faDizzy;
    faEye = faEye;
    faEyeSlash = faEyeSlash;
    faSmileBeam = faSmileBeam;
    needsFocus = false;
    helperText: string;
    store: Store<IAppState>;
    type: string;
    value: any;

    constructor(store: Store<IAppState>) {
        this.store = store;
    }

    ngOnInit() {
        this.type = (this.secret) ? 'password' : 'text';
        this.helperText = 'helper-text input-not-focused';
        this.clear.subscribe(() => {
            this.value = initialState[this.name];
            this.onChange(this.value);
            this.onBlur();
        });
    }

    changeInputType() {
        this.type = (this.type === 'password') ? 'text' : 'password';
    }

    onChange(value: string) {
        this.store.dispatch({ type: UPDATE, payload: { [this.name]: value }});
        this.update.emit({ name: this.name, valid: this.validate(value) });
    }

    onInputFocus() {
        this.helperText = 'helper-text input-focused';
        this.needsFocus = true;
    }

    onBlur() {
        if (!this.value) {
            this.helperText = 'helper-text input-not-focused';
        }
        this.needsFocus = false;
    }
}
