import { Component, OnInit } from '@angular/core';
import { HomeSliderComponent } from '../home-slider/home-slider.component';
import { WindowUtil } from '../../../../utils/WindowUtil';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page-login',
  imports: [CommonModule, HomeSliderComponent],
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
    console.log(`Window format: ${this.windowFormat}`);
    


  }

}
