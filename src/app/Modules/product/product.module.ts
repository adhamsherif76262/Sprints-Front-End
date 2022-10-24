import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductModule {
  id:String;
  price:number;
  url:String;
  description:String;
  Quantity:number;
  category:string;
  constructor(){
      this.id='';
      this.price=0;
      this.url='';
      this.description='';
      this.Quantity=1;
      this.category='';
  }
}
