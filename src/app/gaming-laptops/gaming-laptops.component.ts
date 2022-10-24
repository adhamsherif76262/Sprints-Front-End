import { Component, OnInit } from '@angular/core';
import { ProductModule } from '../Modules/product/product.module';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-gaming-laptops',
  templateUrl: './gaming-laptops.component.html',
  styleUrls: ['./gaming-laptops.component.css']
})
export class GamingLaptopsComponent implements OnInit {

  constructor(private productservice:ProductServiceService) { }
  Products: ProductModule[]=[];

  Json_File_Name :string="assets/Json_DB_Files/Gaming-Laptops.json";

  ngOnInit(): void {
    this.productservice.Get_Products(this.Json_File_Name).subscribe(Response=>{
      for(let i=0; i<Response.length;i++){
        const Product=Response[i];
        Product["Quantity"]=1;
      }
      this.Products=Response;
    })
  }
  Parent_Notified(message:string):void{
    alert(message);
  }
}
