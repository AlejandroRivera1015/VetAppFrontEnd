import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  private isOnScreen = new BehaviorSubject<boolean>(true);
  private confirmAction = new BehaviorSubject<boolean>(false);
  public mainMessage = new BehaviorSubject<string>('');

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


  public setMainMessage(message: string):void{
     
    this.mainMessage.next(message);
  }

  public getMessage(): Observable<string>{
    return this.mainMessage.asObservable();
  }


  public setConfirmation(userAuthorization: boolean):void{
    this.confirmAction.next(userAuthorization);
  }

  public getConfirmation():Observable<boolean>{
    return this.confirmAction.asObservable();
  }
  
}
