import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GlobalFeedComponent } from './globalFeed/globalFeed.component';

export const routes: Routes = [
    {
        path: '',
        component: GlobalFeedComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
];
