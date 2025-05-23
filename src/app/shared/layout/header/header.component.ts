import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {CategoryType} from "../../../../types/category.type";
import {AuthService} from "../../../core/auth/auth.service";
import {DefaultResponseType} from "../../../../types/default-response.type";
import {HttpErrorResponse} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = false;
  @Input()  categories: CategoryType[] = [];

  constructor(private authService: AuthService,
              private _snackBar : MatSnackBar,
              private router: Router) {
    this.isLogged = this.authService.getIsLoggedIn();
  }

  ngOnInit(): void {
      this.authService.isLogged$.subscribe((isLoggedIn:boolean) => {
        this.isLogged = isLoggedIn;
      })
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
}
