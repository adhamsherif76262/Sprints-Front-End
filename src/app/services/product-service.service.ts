import { Injectable } from '@angular/core';
import { ProductModule } from '../Modules/product/product.module';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor( private http:HttpClient) {}
  Get_Products(Json_File_Name:string)
  {
     return this.http.get<ProductModule[]>(Json_File_Name);
  }

}
