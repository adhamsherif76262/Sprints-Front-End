import { Component, Input, OnInit } from '@angular/core';
import { ToCartService } from '../services/to-cart.service';
import { PreviewService } from '../services/preview.service';
import { ProductModule } from '../Modules/product/product.module';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product:ProductModule;
  @Output() Notify_Parent:EventEmitter<string>=new EventEmitter();
  constructor(private tocartservice:ToCartService,private previewservice:PreviewService ) {
    this.product={
      id:"",
      price:0,
      url:'',
      description:'',
      Quantity:1,
      category:''
    }
   }

  ngOnInit(): void {}

  Add_To_Cart(Chosen_Product:ProductModule):void{
    this.tocartservice.AddToCart(Chosen_Product);
    this.Notify_Parent.emit("The Product Has Been Added To The Cart");
  }

  previewproduct(requiredproduct:ProductModule){
    this.previewservice.Preview_Product(requiredproduct);
   }
}
