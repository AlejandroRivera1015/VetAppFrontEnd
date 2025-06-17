import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  private isOnScreen = new BehaviorSubject<boolean>(true);

  constructor() { }



  public toggleOnScreen():void{

    if(this.isOnScreen.value == false){
      this.isOnScreen.next(true);
    }
    else{
      this.isOnScreen.next(false);
    }

  }

  
}
