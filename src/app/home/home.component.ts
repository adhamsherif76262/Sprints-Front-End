import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { PreviewService } from '../services/preview.service';
import { ProductModule } from '../Modules/product/product.module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = 'Angular ' + VERSION.major;
  Products: ProductModule[]=[];
  Json_File_Name :string="assets/Json_DB_Files/Home_Products.json";

  constructor(private productservice:ProductServiceService) { }

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
  images = [
    {img:"assets/Images/Offers/Offers_1.jpeg"},
    {img:"assets/Images/Offers/Offers_2.jpeg"},
    {img:"assets/Images/Offers/Offers_3.jpeg"},
    {img:"assets/Images/Offers/Offers_4.jpeg"},
    {img:"assets/Images/Offers/Offers_5.jpeg"},
    {img:"assets/Images/Offers/Offers_6.jpeg"},
    {img:"assets/Images/Offers/Offers_7.jpeg"},
    {img:"assets/Images/Offers/Offers_8.jpeg"},
    {img:"assets/Images/Offers/Offers_9.jpeg"},
    {img:"assets/Images/Offers/Offers_10.jpeg"}
  ];

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": true,
    "adaptiveHeight": true,
    "centerMode":true,
    "autoplay": true,
    "autoplaySpeed": 3000,
    "speed":2000,
    // "fade": true,
    "cssEase": "cubic-bezier(1, 0, 0, 1)",
  };
}
