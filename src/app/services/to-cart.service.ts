import { Injectable } from '@angular/core';
import { ProductModule } from '../Modules/product/product.module';
@Injectable({
  providedIn: 'root'
})
export class ToCartService {
  total:number=0;
  Cart_List:ProductModule[]=[];
  constructor() { }
  Get_Cart_List():ProductModule[]{
    console.log("from service before returning the cart list int get cart list fun")
    console.log(this.Cart_List)
    return this.Cart_List;
  }
  AddToCart(Chosen_Product:ProductModule):ProductModule[]{
    if(this.Cart_List.includes(Chosen_Product)){
    this.Cart_List[this.Cart_List.indexOf(Chosen_Product)].Quantity=Chosen_Product.Quantity;
    alert("This Product Already Exsists In The Cart");
    alert("This Required Quantity Has Been Updated");
    }
    else{
      this.Cart_List.push(Chosen_Product);
    }
    console.log("from service before returning the cart list in add to cart fun")
    console.log(this.Cart_List)
    return this.Cart_List;
  }
  ClearCart():ProductModule[]{
    this.Cart_List=[];
    return this.Cart_List;
  }
  RemoveProduct(productremove:ProductModule):ProductModule[]{
    this.Cart_List=this.Cart_List.filter(p=>p.id!==productremove.id);
    alert("The Product Has Been Removed From The Cart");
    return this.Cart_List;
  }
}
