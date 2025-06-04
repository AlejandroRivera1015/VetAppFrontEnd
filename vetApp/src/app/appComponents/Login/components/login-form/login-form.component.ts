import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../../services/userServices/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule,ReactiveFormsModule,HttpClientModule],
  standalone: true,
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {

  
  public statusMesage : BehaviorSubject<string> = new BehaviorSubject<string>("For those who matter");
public tempMessage : BehaviorSubject<string> = new BehaviorSubject<string>("");


  constructor(private userService: UserService) { }

  loginForm = new FormGroup({
    email: new FormControl('' , Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    role: new FormControl('user', Validators.required)
  });

  handleLoginFormSubmit() :void{
    this.userService.logIn(this.loginForm).subscribe(
      (responseStatusCode : number)=>{
       responseStatusCode == 200 ?this.statusMesage.next("Welcome") :responseStatusCode == 404 ? this.statusMesage.next("User not found") : responseStatusCode == 500? this.statusMesage.next("Cant connect to server") : this.statusMesage.next("Cant connect to server");
      }
    );
  }


  handleTempMessage() :void {
    for(let i = 0 ; i <= this.statusMesage.value.length -1 ; i++){
      setTimeout(()=>{
        this.tempMessage.next(this.tempMessage.value + this.statusMesage.value[i]);
      },30*i);

    }
    
  }

  ngOnInit(): void {
    this.statusMesage.subscribe(()=>{
      this.tempMessage.next("");
      this.handleTempMessage();

    });
   

  }


}
