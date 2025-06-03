import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule,ReactiveFormsModule],
  standalone: true,
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  public welcomeMessage: string = "For those Who Matter to Us";

  loginForm = new FormGroup({
    email: new FormControl('' , Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  handleLoginFormSubmit() :void{
    console.log("formSubmit "+this.loginForm.value.email);
  }


}
