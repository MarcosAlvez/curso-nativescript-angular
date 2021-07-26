import { Directive, Input } from "@angular/core"; 
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({ 
    selector: "[minlen]", 
    providers: [{provide: NG_VALIDATORS, useExisting: MinLenDirective, multi: true}] 
})

export class MinLenDirective implements Validator { 
    @Input() minlen: string;
    constructor() { }

    validate(control: AbstractControl): {[key: string]: any} { 
        //Retorna null (no hay error) si el campo tiene mayor o igual que 2 (o this.minlen) sino retorna que hay error { minlen: true }
        return !control.value || control.value.length >= (this.minlen || 2) ? null : { minlen: true };
    } 
}
