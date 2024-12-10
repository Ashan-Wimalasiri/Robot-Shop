import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { TemplateFormControlsComponent } from './user/template-form-controls/template-form-controls.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, title: "Home - Robot shop"},
    {path: 'catalog', component: CatalogComponent, title: "Catalog - Robot shop"},
    {path: 'cart', component: CartComponent, title: "Cart - Robot shop"},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'sign-in', component: SignInComponent},
    {path: 'form-controls', component: TemplateFormControlsComponent}
];
