import { Component, OnInit } from '@angular/core';
import { ProductModule } from '../Modules/product/product.module';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-mouses-keyboards',
  templateUrl: './mouses-keyboards.component.html',
  styleUrls: ['./mouses-keyboards.component.css']
})
export class MousesKeyboardsComponent implements OnInit {

  constructor(private productservice:ProductServiceService) { }
  Products: ProductModule[]=[];

  Json_File_Name :string="assets/Json_DB_Files/Mouses-Keyboards.json";

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
