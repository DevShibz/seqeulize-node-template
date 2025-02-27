import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
  isMenuOpen = false;
  menuItems=[
    {id:1,name:'Home',icon:'home',route:'/home'},
    {id:8,name:'Layout',icon:'settings',route:'/Layout'},
    {id:2,name:'Categories',icon:'category',route:'/categories'},
    {id:3,name:'Products',icon:'shopping_cart',route:'/products'},
    {id:4,name:'Users',icon:'people',route:'/users'},
    {id:5,name:'Images',icon:'image',route:'/images'},
    {id:6,name:'ProductImages',icon:'settings',route:'/productImages'},
    {id:7,name:'Banners',icon:'settings',route:'/banner'},
   

  ]
  constructor(public router:Router){}
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
