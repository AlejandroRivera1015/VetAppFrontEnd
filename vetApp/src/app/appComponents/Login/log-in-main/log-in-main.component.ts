import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { HomePageLoginComponent } from '../components/home-page-login/home-page-login.component';

@Component({
  selector: 'app-log-in-main',
  standalone: true,
  imports: [HeaderComponent,HomePageLoginComponent],
  templateUrl: './log-in-main.component.html',
  styleUrl: './log-in-main.component.css'
})
export class LogInMainComponent {

  constructor(){}

}
