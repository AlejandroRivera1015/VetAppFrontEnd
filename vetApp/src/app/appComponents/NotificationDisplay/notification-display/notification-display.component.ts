import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../services/Notifications/notification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notification-display',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './notification-display.component.html',
  styleUrl: './notification-display.component.css'
})
export class NotificationDisplayComponent implements OnInit {

  public isOnScreen : boolean = false;

  public mainMessage$ : Observable<string>;

  constructor(private notificationService: NotificationService){
    this.mainMessage$ = this.notificationService.getMessage();

  }


  public toggleNotificationDisplay():void{
    this.notificationService.toggleOnScreen();
  }

  ngOnInit(): void {
      this.notificationService.getIsOnScreen().subscribe((isActive : boolean) => this.isOnScreen = isActive );

  }

}
