import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { TiendaComponent } from './components/home/tienda/tienda.component';
import { LoginComponent } from './components/home/login/login.component';
import { RegisterComponent } from './components/home/register/register.component';

let titulo ="AngularBIT - "
export const routes: Routes = [
    { path: 'home',title:`${titulo}Home`, component:HomeComponent},
    { path: 'tienda',title:`${titulo}Tienda`, component:TiendaComponent},
    { path: 'login',title:`${titulo}Login`, component:LoginComponent},
    { path: 'register',title:`${titulo}Register`, component:RegisterComponent}

];
