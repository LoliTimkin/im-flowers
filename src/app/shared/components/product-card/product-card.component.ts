import {Component, Input, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: ProductType;
  serverStaticPath: string = environment.serverStaticPath;
  count: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
