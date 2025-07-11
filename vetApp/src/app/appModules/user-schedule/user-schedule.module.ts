import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserScheduleMainContComponent } from '../../appComponents/UserSchedule/user-schedule-main-cont/user-schedule-main-cont.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../../appComponents/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorDisplayComponent } from '../../appComponents/DoctorsDisplay/doctor-display/doctor-display.component';



export const routes: Routes=[{
  path: '',
  component: UserScheduleMainContComponent
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, UserScheduleMainContComponent,RouterModule.forChild(routes),HeaderComponent,HttpClientModule,DoctorDisplayComponent
  ]
})
export class UserScheduleModule { }
