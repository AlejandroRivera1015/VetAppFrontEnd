import { Routes } from '@angular/router';
import { AuthGuard } from './security/auth.guard';

export const routes: Routes = [
    {
        path: "",
        loadChildren: () => import('./appModules/log-in/log-in.module').then(m => m.LogInModule)
    },
    {
        path: "user/schedule",
        loadChildren: () => import('./appModules/user-schedule/user-schedule.module').then(m => m.UserScheduleModule),
        canActivate:[AuthGuard],
        data: {role  :'client'} 
    }
];
