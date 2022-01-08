import { NgModule } from '@angular/core';

import { RootBrowserRoutingModule } from './root-browser-routing.module';
import { RootDefaultComponent } from './components/root-default/root-default.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { Error404Component } from './components/error404/error404.component';
import {AppGenericsModule} from "../app-generics/app-generics.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BlogService} from "./services/blog.service";
import {BackendService} from "./services/backend.service";
import { HomeComponent } from './components/home/home.component';
import { SessionService } from "./services/session.service";
import {AuthenticationGuard} from "./guards/authentication.guard";
import { ProductsComponent } from './components/products/products.component';
import {UserService} from "../app-core/services/user.sevice";
import { CartService} from "./services/cart.service";
import { CartComponent } from './components/cart/cart.component';
import {ProductService} from "./services/product.service";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { CommentComponent } from './components/comment/comment.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { FilterPipe } from './shared/filter.pipe';


@NgModule({
  declarations: [
    RootDefaultComponent,
    Error404Component,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    CommentComponent,
    FilterPipe,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        RootBrowserRoutingModule,
        AppGenericsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule
    ],
  providers: [
    BlogService,
    BackendService,
    SessionService,
    AuthenticationGuard,
    UserService,
    ProductService,
    CartService
  ],
  bootstrap: [
    RootDefaultComponent
  ]
})
export class RootBrowserModule {

}
