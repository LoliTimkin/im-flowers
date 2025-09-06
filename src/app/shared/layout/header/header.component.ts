import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {CategoryType} from "../../../../types/category.type";
import {AuthService} from "../../../core/auth/auth.service";
import {DefaultResponseType} from "../../../../types/default-response.type";
import {HttpErrorResponse} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {CategoryWithTypeType} from "../../../../types/category-with-type";
import {CartService} from "../../services/cart.service";
import {ProductService} from "../../services/product.service";
import {ProductType} from "../../../../types/product";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  serverStaticPath: string = environment.serverStaticPath;
  searchValue: string = '' ;
  products: ProductType[] = [];
  count: number = 0;
  isLogged: boolean = false;
  @Input()  categories: CategoryWithTypeType[] = [];

  constructor(private authService: AuthService,
              private _snackBar : MatSnackBar,
              private cartService: CartService,
              private productService: ProductService,
              private router: Router) {
    this.isLogged = this.authService.getIsLoggedIn();
  }

  ngOnInit(): void {
      this.authService.isLogged$.subscribe((isLoggedIn:boolean) => {
        this.isLogged = isLoggedIn;
      })

    this.cartService.getCartCount()
      .subscribe((data: {count: number} | DefaultResponseType) => {
        if((data as DefaultResponseType).error !== undefined) {
          throw new Error((data as DefaultResponseType).message);
        }
        this.count = (data as {count: number}).count;
      })

    this.cartService.count$
      .subscribe(count => this.count = count)
  }

  logout(): void {
    this.authService.logout()
      .subscribe({
        next: () => {
         this.doLogout();
        },
        error: () => {
          this.doLogout();
        }
      })

  }

  doLogout(): void {
    this.authService.removeTokens();
    this.authService.userId = null;
    this._snackBar.open('Вы успешно вышли из системы');
    this.router.navigate(['/']);
  }

  changeSearchValue(newValue: string): void {
    this.searchValue = newValue;
    if(this.searchValue && this.searchValue.length > 2) {

      this.productService.searchProducts(this.searchValue)
        .subscribe({
          next: (data: ProductType[]) => {
            this.products = data;
          }
        })
    } else {
      this.products = [];
    }
  }

  selectProduct(product: ProductType): void {
    this.router.navigate(['/product/' + product.url]);
    this.searchValue = '';
    this.products = [];
  }
}
