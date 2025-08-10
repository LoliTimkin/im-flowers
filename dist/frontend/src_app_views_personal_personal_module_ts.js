"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_views_personal_personal_module_ts"],{

/***/ 1076:
/*!***************************************************************!*\
  !*** ./src/app/views/personal/favorite/favorite.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoriteComponent": () => (/* binding */ FavoriteComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/favorite.service */ 4553);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





function FavoriteComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u043C \u043D\u0435\u0442 \u0442\u043E\u0432\u0430\u0440\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0412 \u043A\u0430\u0442\u0430\u043B\u043E\u0433");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function FavoriteComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 13)(7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FavoriteComponent_div_5_div_1_Template_div_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const product_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.removeFromFavorites(product_r3.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "line", 17)(12, "line", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMapInterpolate1"]("background-image: url('", ctx_r2.serverStaticPath + product_r3.image, "')");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", product_r3.price, " BYN");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/product/", product_r3.url, "");
} }
function FavoriteComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FavoriteComponent_div_5_div_1_Template, 13, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.products);
} }
class FavoriteComponent {
    constructor(favoriteService) {
        this.favoriteService = favoriteService;
        this.products = [];
        this.serverStaticPath = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.serverStaticPath;
    }
    ngOnInit() {
        this.favoriteService.getFavorites()
            .subscribe((data) => {
            if (data.error !== undefined) {
                const error = data.message;
                throw new Error(error);
            }
            this.products = data;
        });
    }
    removeFromFavorites(id) {
        this.favoriteService.removeFavorites(id)
            .subscribe((data) => {
            if (data.error) {
                // ..
                throw new Error(data.message);
            }
            this.products = this.products.filter(item => item.id !== id);
        });
    }
}
FavoriteComponent.ɵfac = function FavoriteComponent_Factory(t) { return new (t || FavoriteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_1__.FavoriteService)); };
FavoriteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FavoriteComponent, selectors: [["app-favorite"]], decls: 6, vars: 2, consts: [[1, "favorite"], [1, "container"], [1, "favorite-title"], ["class", "favorite-empty", 4, "ngIf"], ["class", "favorite-products", 4, "ngIf"], [1, "favorite-empty"], ["routerLink", "/catalog", 1, "button"], [1, "favorite-products"], ["class", "favorite-product", 4, "ngFor", "ngForOf"], [1, "favorite-product"], [1, "favorite-product-image"], [1, "favorite-product-name"], [1, "favorite-product-price"], [1, "favorite-product-action"], [1, "button", 3, "routerLink"], [1, "favorite-product-remove", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x1", "1.93562", "y1", "2.6499", "x2", "13.9564", "y2", "14.6707", "stroke", "#A8ABA7", "stroke-linecap", "round"], ["x1", "13.9238", "y1", "2.62996", "x2", "1.90301", "y2", "14.6508", "stroke", "#A8ABA7", "stroke-linecap", "round"]], template: function FavoriteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, FavoriteComponent_div_4_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FavoriteComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.products || ctx.products.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.products && ctx.products.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], styles: [".favorite[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  padding-bottom: 110px;\n}\n.favorite[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .favorite-title[_ngcontent-%COMP%] {\n  font-family: \"Lora\", sans-serif;\n  font-weight: 400;\n  font-size: 36px;\n  font-style: normal;\n  color: #000000;\n  color: #202b21;\n  margin-bottom: 35px;\n}\n.favorite[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .favorite-empty[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 100px;\n}\n.favorite[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .favorite-empty[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.favorite[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .favorite-empty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 255px;\n  margin-top: 10px;\n}\n.favorite[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .favorite-products[_ngcontent-%COMP%]   .favorite-product[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 15px;\n  padding-top: 15px;\n  border-top: 1px solid #e7f1e8;\n}\n.favorite[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .favorite-products[_ngcontent-%COMP%]   .favorite-product[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n  padding-top: 0;\n  border-top: 0;\n}\n.favorite[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .favorite-products[_ngcontent-%COMP%]   .favorite-product[_ngcontent-%COMP%]   .favorite-product-image[_ngcontent-%COMP%] {\n  background-position: center;\n  background-size: cover;\n  border-radius: 5px;\n  width: 100px;\n  height: 100px;\n}\n.favorite[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .favorite-products[_ngcontent-%COMP%]   .favorite-product[_ngcontent-%COMP%]   .favorite-product-name[_ngcontent-%COMP%] {\n  margin-left: 24px;\n  font-size: 20px;\n  color: #2c2c2c;\n  width: 567px;\n  margin-right: 20px;\n}\n.favorite[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .favorite-products[_ngcontent-%COMP%]   .favorite-product[_ngcontent-%COMP%]   .favorite-product-price[_ngcontent-%COMP%] {\n  width: 100px;\n  margin-right: 193px;\n  font-family: Montserrat, sans-serif;\n  font-weight: 600;\n  font-size: 22px;\n  color: #2c2c2c;\n}\n.favorite[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .favorite-products[_ngcontent-%COMP%]   .favorite-product[_ngcontent-%COMP%]   .favorite-product-action[_ngcontent-%COMP%] {\n  width: 160px;\n}\n.favorite[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .favorite-products[_ngcontent-%COMP%]   .favorite-product[_ngcontent-%COMP%]   .favorite-product-remove[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 61px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm9yaXRlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fbWl4aW5zLnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUFGRjtBQU1JO0VDRUYsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RURKSSxjRVZhO0VGV2IsbUJBQUE7QUFBTjtBQUdJO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtBQUROO0FBR007RUFDRSxlQUFBO0FBRFI7QUFJTTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUZSO0FBUU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQU5SO0FBUVE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFOVjtBQVNRO0VBQ0UsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFQVjtBQVVRO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0V0RFE7RUZ1RFIsWUFBQTtFQUNBLGtCQUFBO0FBUlY7QUFXUTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0VqRVE7QUZ3RGxCO0FBWVE7RUFDRSxZQUFBO0FBVlY7QUFhUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQVhWIiwiZmlsZSI6ImZhdm9yaXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9taXhpbnNcIjtcblxuLmZhdm9yaXRlIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMTBweDtcblxuICAuY29udGFpbmVyIHtcblxuICAgIC5mYXZvcml0ZS10aXRsZSB7XG4gICAgICBAaW5jbHVkZSBoZWFkLWxvcmEtMzY7XG4gICAgICBjb2xvcjogJGdyZWVuLXRleHQtY29sb3I7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgIH1cblxuICAgIC5mYXZvcml0ZS1lbXB0eSB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG5cbiAgICAgIGRpdiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDI1NXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5mYXZvcml0ZS1wcm9kdWN0cyB7XG5cbiAgICAgIC5mYXZvcml0ZS1wcm9kdWN0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2YxZTg7XG5cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZhdm9yaXRlLXByb2R1Y3QtaW1hZ2Uge1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mYXZvcml0ZS1wcm9kdWN0LW5hbWUge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBjb2xvcjogJGdyZXktdGV4dC1jb2xvcjtcbiAgICAgICAgICB3aWR0aDogNTY3cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZhdm9yaXRlLXByb2R1Y3QtcHJpY2Uge1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE5M3B4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgIGNvbG9yOiAkZ3JleS10ZXh0LWNvbG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZhdm9yaXRlLXByb2R1Y3QtYWN0aW9uIHtcbiAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmF2b3JpdGUtcHJvZHVjdC1yZW1vdmUge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNjFweFxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIGhlYWQtbG9yYS0zMiB7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGNvbG9yOiAkZ3JlZW4tdGV4dC1jb2xvclxufVxuXG5AbWl4aW4gaGVhZC1sb3JhLTM2IHtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgY29sb3I6ICMwMDAwMDBcbn1cbiIsIiRjb250YWluZXItd2lkdGg6IDEyNDBweDtcbiRncmVlbi10ZXh0LWNvbG9yOiAjMjAyYjIxO1xuJGdyZXktdGV4dC1jb2xvcjogIzJjMmMyYztcbiJdfQ== */"] });


/***/ }),

/***/ 9065:
/*!*******************************************************!*\
  !*** ./src/app/views/personal/info/info.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoComponent": () => (/* binding */ InfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class InfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
InfoComponent.ɵfac = function InfoComponent_Factory(t) { return new (t || InfoComponent)(); };
InfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoComponent, selectors: [["app-info"]], decls: 2, vars: 0, template: function InfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "info works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6891:
/*!***********************************************************!*\
  !*** ./src/app/views/personal/orders/orders.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersComponent": () => (/* binding */ OrdersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class OrdersComponent {
    constructor() { }
    ngOnInit() {
    }
}
OrdersComponent.ɵfac = function OrdersComponent_Factory(t) { return new (t || OrdersComponent)(); };
OrdersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrdersComponent, selectors: [["app-orders"]], decls: 2, vars: 0, template: function OrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "orders works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3720:
/*!***********************************************************!*\
  !*** ./src/app/views/personal/personal-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalRoutingModule": () => (/* binding */ PersonalRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite/favorite.component */ 1076);
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders/orders.component */ 6891);
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info/info.component */ 9065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    { path: 'favorite', component: _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_0__.FavoriteComponent },
    { path: 'orders', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_1__.OrdersComponent },
    { path: 'info', component: _info_info_component__WEBPACK_IMPORTED_MODULE_2__.InfoComponent },
];
class PersonalRoutingModule {
}
PersonalRoutingModule.ɵfac = function PersonalRoutingModule_Factory(t) { return new (t || PersonalRoutingModule)(); };
PersonalRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PersonalRoutingModule });
PersonalRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PersonalRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 4171:
/*!***************************************************!*\
  !*** ./src/app/views/personal/personal.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalModule": () => (/* binding */ PersonalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _personal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal-routing.module */ 3720);
/* harmony import */ var _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorite/favorite.component */ 1076);
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info/info.component */ 9065);
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders/orders.component */ 6891);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);







class PersonalModule {
}
PersonalModule.ɵfac = function PersonalModule_Factory(t) { return new (t || PersonalModule)(); };
PersonalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PersonalModule });
PersonalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _personal_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersonalRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PersonalModule, { declarations: [_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_1__.FavoriteComponent,
        _info_info_component__WEBPACK_IMPORTED_MODULE_2__.InfoComponent,
        _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__.OrdersComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _personal_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersonalRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_personal_personal_module_ts.js.map