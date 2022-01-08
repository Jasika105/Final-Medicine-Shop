import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../../root-browser/services/cart.service";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  public totalItem : number = 0;
  public searchTerm : string = '';
  @Input() headerTitle: string;

  showMe:boolean=false;

  toggleTag() {
    this.showMe=!this.showMe
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  search(event:any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}
