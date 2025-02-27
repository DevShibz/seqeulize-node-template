import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { CategoriesComponent } from '../pages/categories/categories.component';
import { ProductComponent } from '../pages/product/product.component';
import { BannerComponent } from '../pages/banner/banner.component';
import { ImagesComponent } from '../pages/images/images.component';
import { ProductImageComponent } from '../pages/product-image/product-image.component';
import { UsersComponent } from '../pages/users/users.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {path: 'categories', component: CategoriesComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path:'products',component:ProductComponent},
    {path:'banner',component:BannerComponent},
    {path:'images',component:ImagesComponent},
    {path:'product_images',component:ProductImageComponent},
    {path: 'users', component:UsersComponent}

];
