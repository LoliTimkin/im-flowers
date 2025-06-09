import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../shared/services/product.service";
import {ProductType} from "../../../../types/product";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  products: ProductType[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe((data: {totalCount: number, pages: number, items: ProductType[]}) => {
        this.products = data.items;
    })
  }

}
