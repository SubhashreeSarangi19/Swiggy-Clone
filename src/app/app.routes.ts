import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { WishlistedRestaurantsComponent } from './wishlisted-restaurants/wishlisted-restaurants.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'wishlist',
        component: WishlistedRestaurantsComponent
    },
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'cart',
        component: CartComponent
    }
];

