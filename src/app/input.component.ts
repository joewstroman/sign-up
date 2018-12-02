import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faDizzy, faSmileBeam } from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
  })

export class InputComponent {
    @Output() update = new EventEmitter<{ value: string }>();

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

    onChange(value: string) {
        console.log('this is changing');
        this.update.emit({ value });
    }
}
