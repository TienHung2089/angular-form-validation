import { Component } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  userName: string;
  password: string;

  submitted: boolean = false;

  onSubmit(ngModel) {
    this.submitted = true;
    console.log(ngModel);
    console.log(typeof ngModel.value);
  }

  

}
