import { Component, OnInit } from '@angular/core';
import { HomeSliderComponent } from '../home-slider/home-slider.component';
import { WindowUtil } from '../../../../utils/WindowUtil';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-home-page-login',
  imports: [CommonModule, HomeSliderComponent,LoginFormComponent],
  standalone: true,
  templateUrl: './home-page-login.component.html',
  styleUrl: './home-page-login.component.css'
})
export class HomePageLoginComponent implements OnInit {

  public windowFormat: string = "unknown";

  constructor(){
  }

  ngOnInit() {
    this.windowFormat = WindowUtil.getWindowFormat();
    
  }

}
