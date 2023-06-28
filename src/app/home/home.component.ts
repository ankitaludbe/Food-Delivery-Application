import { Component } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { Foods } from '../shared/models/food';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent /*implements OnInit*/ {
    foods:Foods[]=[];
    constructor(private fS:FoodService){

    }

    ngOnInit():void{
      this.foods=this.fS.getall();
    }
}
