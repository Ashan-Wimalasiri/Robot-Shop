import { Component, Inject, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { CartService } from '../cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'bot-catalog',
  standalone: true,
  imports: [CommonModule, ProductDetailsComponent, RouterLink, RouterLinkActive],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  products! : IProduct[];
  filter : string = '';
  //private cartSvc: CartService = Inject(CartService);
  

  constructor(
    private cartSvc: CartService, 
    private productSvc: ProductService, 
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.productSvc.getProducts().subscribe((products) => this.products = products);
    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] || '';
    })
  }
  getFilteredProducts() : IProduct[] {
    return this.filter === ''
    ? this.products
    : this.products.filter((product) => product.category === this.filter);
  }

  addToCart(product: IProduct) {
    this.cartSvc.add(product);
    this.router.navigate(['/cart']);
  }
}
