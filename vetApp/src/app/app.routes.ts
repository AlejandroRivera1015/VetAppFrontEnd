import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadChildren: () => import('./appModules/log-in/log-in.module').then(m => m.LogInModule)
    }
];
