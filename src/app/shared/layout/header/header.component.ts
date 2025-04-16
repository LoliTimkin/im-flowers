import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {CategoryType} from "../../../../types/category.type";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()  categories: CategoryType[] = [];

  constructor() {

  }

  ngOnInit(): void {

  }

}
