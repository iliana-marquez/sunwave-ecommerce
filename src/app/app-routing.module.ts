import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-list/product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { HeroComponent } from './hero/hero.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'', component: HeroComponent, pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'products', component: ProductListComponent},
  {path:'details/:id', component: ProductDetailsComponent},
  {path:'cart', component: CartComponent},
  {path:'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
