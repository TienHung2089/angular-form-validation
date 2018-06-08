import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appPasswordMatching]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordMatchingDirective, multi: true}]
})
export class PasswordMatchingDirective implements Validator {
  @Input('appPasswordMatching') password: string;
  
  validate(c: AbstractControl):{[key: string]: any}|null {
    return this.password ? passwordMatching(new RegExp(this.password))(c) : null;
  }

}

export function passwordMatching(pass: RegExp): ValidatorFn {
  return (c: AbstractControl): {[key:string]: any}|null => {
    const isMatched = pass.test(c.value);
    return isMatched? null: {'isPasswordMatched': false};
  }
}