import { Directive, ElementRef,  Input, OnChanges } from '@angular/core';

@Directive({
    selector: '[appFocus]'
})

export class FocusDirective implements OnChanges {
    @Input('appFocus') needsFocus: boolean;

    constructor(private el: ElementRef) { }

    ngOnChanges() {
        if (this.needsFocus) {
            this.el.nativeElement.focus();
        }
    }
}
