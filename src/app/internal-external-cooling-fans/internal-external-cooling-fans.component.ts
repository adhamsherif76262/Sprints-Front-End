import { Component, OnInit } from '@angular/core';
import { ProductModule } from '../Modules/product/product.module';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-internal-external-cooling-fans',
  templateUrl: './internal-external-cooling-fans.component.html',
  styleUrls: ['./internal-external-cooling-fans.component.css']
})
export class InternalExternalCoolingFansComponent implements OnInit {

  constructor(private productservice:ProductServiceService) { }
  Products: ProductModule[]=[];

  Json_File_Name :string="assets/Json_DB_Files/Internal-External-Cooling-Fans.json";

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
