import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Restaurant } from '../restaurant.model';
import { FormsModule } from '@angular/forms';
import { CartServiceService } from '../cart/cart-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  cartCount: number = 0;
  isSearchVisible: boolean = false; 
  searchTerm: string = '';
  noResultsMessage: string = '';
  filteredRestaurants: any[] = [];

  toggleSearchVisibility(): void {
    this.isSearchVisible = !this.isSearchVisible;
  }
  constructor(private cartService: CartServiceService){}
  restaurants: Restaurant[] = [
    { id: 1, name: 'Pizza Hut', rating: 4.5, isFavorite: false, imageUrl: 'assets/pizza-hut.avif' },
    { id: 2, name: 'KFC', rating: 4.2, isFavorite: true, imageUrl: 'assets/kfc.avif' },
    { id: 3, name: "Domino's", rating: 4.0, isFavorite: false, imageUrl: 'assets/dominos.avif' },
    { id: 4, name: "Wow! Momo", rating: 4.6, isFavorite: true, imageUrl: 'assets/wow-momo.avif' },
    { id: 5, name: "Burger King", rating: 4.1, isFavorite: false, imageUrl: 'assets/burger-king.avif' },
    { id: 6, name: "Biryani Box", rating: 3.9, isFavorite: false, imageUrl: 'assets/biryani-box.avif' },
    { id: 7, name: "La Pino'z Pizza", rating: 3.6, isFavorite: false, imageUrl: 'assets/la-pinoz.avif' },
    { id: 8, name: "Kwality Walls Ice Cream", rating: 4.8, isFavorite: false, imageUrl: 'assets/kwality-walls.avif' },
    { id: 9, name: "Rajdhani Fastfood", rating: 3.6, isFavorite: false, imageUrl: 'assets/fast-food.avif' },
    { id: 10, name: "Woodfire Biryani", rating: 3.9, isFavorite: false, imageUrl: 'assets/woodfire-biryani.avif' },
    { id: 11, name: "Mio Amore", rating: 4.8, isFavorite: false, imageUrl: 'assets/mio-amore.avif' },
    { id: 12, name: "The Belgian Waffle Co.", rating: 4.0, isFavorite: false, imageUrl: 'assets/waffle.avif' }
  ];

  searchRestaurants(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      if (this.searchTerm.trim() === '') {
        this.noResultsMessage = 'Nothing to show'; // Show this message when no text is entered
        this.filteredRestaurants = [];
        this.isSearchVisible = true; // Always show search result div even when no results
      } else {
        this.filteredRestaurants = this.restaurants.filter(restaurant =>
          restaurant.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
        this.noResultsMessage = this.filteredRestaurants.length === 0 ? 'No results found' : ''; // Show "No results found" when no matches are found
        this.isSearchVisible = this.filteredRestaurants.length > 0 || this.searchTerm.trim() !== ''; // Keep search results visible
      }
    }
  }
  clearSearch(): void {
    this.searchTerm = '';
    this.isSearchVisible = false;
    this.filteredRestaurants = [];
    this.noResultsMessage = ''; // Clear the "Nothing to show" message
  }
  ngOnInit():void{
    this.cartService.cartCount$.subscribe(count=>{
      this.cartCount = count;
    })
  }

}
