import { Component, EventEmitter, OnInit } from '@angular/core';
import { ProductModule } from '../Modules/product/product.module';
import { PreviewService } from '../services/preview.service';
import { ProductServiceService } from '../services/product-service.service';
import { ToCartService } from '../services/to-cart.service';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {

    Products:ProductModule[]=[];
    Required_Product_ID:number=0;
    constructor(private tocartservice:ToCartService,
                private previewproductservice:PreviewService,
                private productservice:ProductServiceService) {}

  ngOnInit(): void {
    this.Products=this.previewproductservice.Return_Product();
  }

  Push_To_Cart(certainproduct:ProductModule):void{
    this.tocartservice.AddToCart(certainproduct);
    alert("The Product Has Been Added To The Cart");
  }
}
