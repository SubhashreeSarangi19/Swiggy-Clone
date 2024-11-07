import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { CuisinesComponent } from './cuisines/cuisines.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, NgModel } from '@angular/forms';
import { WishlistedRestaurantsComponent } from './wishlisted-restaurants/wishlisted-restaurants.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule,
    RouterOutlet,HeaderComponent,CuisinesComponent,
    RouterLink,RestaurantsComponent,FooterComponent,
    SignupComponent,LoginComponent,FormsModule,
    WishlistedRestaurantsComponent,MenuComponent,
    CartComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'swiggy';
  showCuisinesAndRestaurants = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.showCuisinesAndRestaurants = this.router.url === '/';
    });
  }
}
