import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getall():Foods[]{
    return[
      {
        id:1,
        price:5,
        name:'Burger',
        favorite:false,
        star:4.5,
        tags:['Spicy','Non-Veg'],
        imageurl:'/assets/food1.jpg',
        cooktime:'10-20',
        origins:['Italy'],
      },
      {
        id:2,
        price:8,
        name:'Shawarma',
        favorite:false,
        star:4.5,
        tags:['Spicy','Non-Veg'],
        imageurl:'/assets/food2.jpg',
        cooktime:'10-15',
        origins:['Turkey'],
      },
      {
        id:3,
        price:4,
        name:'French Fries',
        favorite:true,
        star:5.0,
        tags:['Spicy','salty','Peri Peri'],
        imageurl:'/assets/food3.jpg',
        cooktime:'5-10',
        origins:['Belgium'],
      },
      {
        id:4,
        price:15,
        name:'Pizza',
        favorite:true,
        star:4.0,
        tags:['Spicy','Non-Veg','Veg'],
        imageurl:'/assets/food4.jpg',
        cooktime:'20-30',
        origins:['Italy'],
      },
      {
        id:5,
        price:9,
        name:'Stuffed Garlic Bread',
        favorite:false,
        star:4.5,
        tags:['Cheesy','Non-Veg','Veg'],
        imageurl:'/assets/food5.jpg',
        cooktime:'10-20',
        origins:['Italy'],
      },
      {
        id:6,
        price:14,
        name:'Momos',
        favorite:false,
        star:5.0,
        tags:['Steamed','Fried','Chicken'],
        imageurl:'/assets/food6.jpg',
        cooktime:'15-20',
        origins:['Italy'],
      },
      {
        id:7,
        price:18,
        name:'Panini',
        favorite:false,
        star:4.5,
        tags:['Veg','Non-Veg'],
        imageurl:'/assets/food7.jpg',
        cooktime:'10-20',
        origins:['Italy'],
      },
      {
        id:8,
        price:10,
        name:'Pasta',
        favorite:false,
        star:4.1,
        tags:['Pink sauce','White sauce','Non-Veg'],
        imageurl:'/assets/food8.jpg',
        cooktime:'15-20',
        origins:['Italy'],
      },

    ]
  }
}
