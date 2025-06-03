import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../../appComponents/header/header.component';
import { LogInMainComponent } from '../../appComponents/Login/log-in-main/log-in-main.component';

export const routes: Routes = [{
  path: '',
  component: LogInMainComponent,
}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    LogInMainComponent,HeaderComponent,NgIf
  ],
})
export class LogInModule { }
