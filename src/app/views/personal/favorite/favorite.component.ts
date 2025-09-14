import {Component, Input, OnInit, Output} from '@angular/core';
import {FavoriteService} from "../../../shared/services/favorite.service";
import {FavoriteType} from "../../../../types/favorite.type";
import {DefaultResponseType} from "../../../../types/default-response.type";
import {environment} from "../../../../environments/environment";
import {CartType} from "../../../../types/cart.type";
import {CartService} from "../../../shared/services/cart.service";
import {ProductType} from "../../../../types/product";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  cart: CartType | null = null;
  count: number = 1;
  products: FavoriteType[] = [];
  serverStaticPath: string = environment.serverStaticPath;

  constructor(private favoriteService: FavoriteService,
              private cartService: CartService) { }

  ngOnInit(): void {

    this.cartService.getCart()
      .subscribe((data: CartType | DefaultResponseType) => {
        if((data as DefaultResponseType).error !== undefined) {
          throw new Error((data as DefaultResponseType).message);
        }
        this.cart = data as CartType;

        this.favoriteService.getFavorites()
          .subscribe((data: FavoriteType[] | DefaultResponseType) => {
            if((data as DefaultResponseType).error !== undefined) {
              const error = (data as DefaultResponseType).message ;
              throw new Error(error)
            }
            const favorites: FavoriteType[] = data as FavoriteType[];

            if(favorites && favorites.length > 0) {
              this.proccessFavorites(favorites)
            }
          })
      })

  }

  proccessFavorites(favorites: FavoriteType[])  {

    if(this.cart && this.cart.items.length > 0) {
      this.products = favorites.map(product => {
        if(this.cart) {
          const productInCart = this.cart.items.find(item => item.product.id === product.id);
          if(productInCart) {
            product.countInCart = productInCart.quantity;
            //this.count = productInCart.quantity
          }
        }
        return product
      });
    } else {
      this.products = favorites
    }
  }

  removeFromFavorites(id: string) {

    this.favoriteService.removeFavorites(id)
      .subscribe((data: DefaultResponseType) => {
        if(data.error) {
          // ..
          throw new Error(data.message);
        }

        this.products = this.products.filter(item => item.id !== id)

      })


  }

  addToCart(id: string) {
    this.cartService.updateCart(id, this.count)
      .subscribe((data: CartType | DefaultResponseType) => {
        if((data as DefaultResponseType).error !== undefined) {
          throw new Error((data as DefaultResponseType).message);
        }

      })
  }

  updateCount(id: string, count: number) {
    if (count) {
      this.count = count;
      this.cartService.updateCart(id, this.count)
        .subscribe((data: CartType | DefaultResponseType) => {
          if((data as DefaultResponseType).error !== undefined) {
            throw new Error((data as DefaultResponseType).message);
          }
        })
    }
  }

  removeFromCart(product: FavoriteType) {
    this.cartService.updateCart(product.id, 0)
      .subscribe((data: CartType | DefaultResponseType) => {
        if((data as DefaultResponseType).error !== undefined) {
          throw new Error((data as DefaultResponseType).message);
        }
        delete product.countInCart;
        //this.count = 1;
      })
  }



}
