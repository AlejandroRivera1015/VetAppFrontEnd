import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userServices/user.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  public isMenuActive: boolean = false;
  public userRole : string | null | undefined = "" ; 
  handleMenuToggle(){
    console.log("Menu toggled");
    this.isMenuActive = !this.isMenuActive;
  }

  constructor(private userServices : UserService) { 

  }
  ngOnInit(): void {
      this.userServices.getUser().subscribe(user =>{
        this.userRole = user?.getRole();
      });
  }

}
