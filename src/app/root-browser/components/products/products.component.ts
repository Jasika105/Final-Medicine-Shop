import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList : any ;
  public filterCategory : any
  searchKey:string="";

  constructor(private productService : ProductService, private cartService : CartService) { }
  ngOnInit(): void {
    this.productService.getProduct().subscribe(res=> {
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        a.comment = "";
        a.postComment = [];
        if(a.category ==="Beximco" || a.category ==="Antiseptics"){
          a.category ="all"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });
    this.cartService.search.subscribe((val:any)=> {
      this.searchKey = val;
    })
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }

  filter(category:string){
    this.filterCategory = this.productList.filter((a:any)=>{
      if(a.category == category || category == ''){
        return a;
      }
    })
  }

}
