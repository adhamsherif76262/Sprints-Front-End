import { Injectable } from '@angular/core';
import { ProductModule } from '../Modules/product/product.module';
import { ProductServiceService } from './product-service.service';
import { ToCartService } from './to-cart.service';
@Injectable({
  providedIn: 'root'
})
export class PreviewService {

  Products:ProductModule[]=[];
  User_Name:string='';
  User_Total:string='';
  Required_ID:number=0;
  constructor(private productservice:ProductServiceService) { }
  Json_File_Name:string="assets/Json_DB_Files/All_Products.json"
  Preview_Product(selectedproduct:ProductModule):ProductModule[]{
    this.productservice.Get_Products(this.Json_File_Name).subscribe(Response=>{
      for(let i=0; i<Response.length;i++){
        const Product=Response[i];
        Product["Quantity"]=1;
      }
      this.Products=Response;
    })
    this.Products=this.Products.filter(p=>p.description===selectedproduct.description)
    return this.Products;
  }
  Return_Product():ProductModule[]{
    return this.Products;
  }
  Get_User_Name(username:string):void{
    this.User_Name=username;
  }
  Get_User_Total(usertotal:number):void{
    this.User_Total=usertotal.toString();
  }
  Return_User_Name():string{
    return this.User_Name;
  }
  Return_User_Total():string{
    return this.User_Total;
  }
}
