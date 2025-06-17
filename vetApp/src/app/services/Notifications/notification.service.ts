import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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

  public getIsOnScreen(): Observable<boolean>{
    return this.isOnScreen.asObservable();

  }

  
}
