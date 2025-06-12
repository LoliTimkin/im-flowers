import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../shared/services/product.service";
import {ProductType} from "../../../../types/product";
import {CategoryService} from "../../../shared/services/category.service";
import {CategoryWithTypeType} from "../../../../types/category-with-type";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  products: ProductType[] = [];
  categoriesWithTypes: CategoryWithTypeType[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe((data: {totalCount: number, pages: number, items: ProductType[]}) => {
        this.products = data.items;
    })

    this.categoryService.getCategoriesWithTypes()
      .subscribe((data) => {
        this.categoriesWithTypes = data;
      })
  }

}
