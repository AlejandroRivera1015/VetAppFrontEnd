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

  logiForm = new FormGroup({
    email: new FormControl('' , Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

}
