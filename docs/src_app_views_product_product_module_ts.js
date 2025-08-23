"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_views_product_product_module_ts"],{

/***/ 9738:
/*!************************************************************!*\
  !*** ./src/app/views/product/catalog/catalog.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogComponent": () => (/* binding */ CatalogComponent)
/* harmony export */ });
/* harmony import */ var _shared_utils_active_params_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ utils/active-params.util */ 1687);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/product.service */ 773);
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/category.service */ 7408);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/cart.service */ 5237);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/product-card/product-card.component */ 3284);
/* harmony import */ var _shared_components_category_filter_category_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/category-filter/category-filter.component */ 7007);










function CatalogComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CatalogComponent_div_6_Template_a_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const appliedFilter_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.removeAppliedFilter(appliedFilter_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "svg", 22)(5, "g", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "line", 24)(7, "line", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const appliedFilter_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](appliedFilter_r5.name);
} }
function CatalogComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CatalogComponent_div_14_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const sortingOption_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.sort(sortingOption_r8.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sortingOption_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r1.activeParams.sort ? ctx_r1.activeParams.sort === sortingOption_r8.value : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", sortingOption_r8.name, " ");
} }
function CatalogComponent_category_filter_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "category-filter", 27);
} if (rf & 2) {
    const categoryWithTypes_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("categoryWithTypes", categoryWithTypes_r11);
} }
function CatalogComponent_product_card_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "product-card", 28);
} if (rf & 2) {
    const product_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("countInCart", product_r12.countInCart)("product", product_r12);
} }
function CatalogComponent_div_22_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CatalogComponent_div_22_a_6_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const page_r14 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.openPage(page_r14)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r13.activeParams.page ? ctx_r13.activeParams.page === page_r14 : page_r14 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](page_r14);
} }
function CatalogComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CatalogComponent_div_22_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.openPrevPage()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "path", 32)(4, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, CatalogComponent_div_22_a_6_Template, 2, 3, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CatalogComponent_div_22_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.openNextPage()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "path", 36)(10, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", ctx_r4.activeParams.page ? ctx_r4.activeParams.page === 1 : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", ctx_r4.activeParams.page ? ctx_r4.activeParams.page === ctx_r4.pages.length : false);
} }
class CatalogComponent {
    constructor(productService, categoryService, activatedRoute, cartService, router) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.activatedRoute = activatedRoute;
        this.cartService = cartService;
        this.router = router;
        this.products = [];
        this.categoriesWithTypes = [];
        this.activeParams = { types: [] };
        this.appliedFilters = [];
        this.sortingOpen = false;
        this.sortingOptions = [
            { name: 'От А до Я', value: 'az-asc' },
            { name: 'От Я до А', value: 'az-desc' },
            { name: 'По возрастанию цены', value: 'price-asc' },
            { name: 'По убыванию цены', value: 'price-desc' },
        ];
        this.pages = [];
        this.cart = null;
    }
    ngOnInit() {
        this.cartService.getCart()
            .subscribe((data) => {
            this.cart = data;
        });
        this.categoryService.getCategoriesWithTypes()
            .subscribe((data) => {
            this.categoriesWithTypes = data;
            this.activatedRoute.queryParams
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(500))
                .subscribe(params => {
                this.activeParams = _shared_utils_active_params_util__WEBPACK_IMPORTED_MODULE_0__.ActiveParamsUtil.processParams(params);
                this.appliedFilters = [];
                this.activeParams.types.forEach(url => {
                    for (let i = 0; i < this.categoriesWithTypes.length; i++) {
                        const fountType = this.categoriesWithTypes[i].types.find(type => type.url === url);
                        if (fountType) {
                            this.appliedFilters.push({
                                name: fountType.name,
                                urlParam: fountType.url
                            });
                        }
                    }
                });
                if (this.activeParams.heightFrom) {
                    this.appliedFilters.push({
                        name: 'Высота от ' + this.activeParams.heightFrom + ' см',
                        urlParam: 'heightFrom'
                    });
                }
                if (this.activeParams.heightTo) {
                    this.appliedFilters.push({
                        name: 'Высота до ' + this.activeParams.heightTo + ' см',
                        urlParam: 'heightTo'
                    });
                }
                if (this.activeParams.diameterFrom) {
                    this.appliedFilters.push({
                        name: 'Диаметр от ' + this.activeParams.diameterFrom + ' см',
                        urlParam: 'diameterFrom'
                    });
                }
                if (this.activeParams.diameterTo) {
                    this.appliedFilters.push({
                        name: 'Диаметр от ' + this.activeParams.diameterTo + ' см',
                        urlParam: 'diameterTo'
                    });
                }
                this.productService.getProducts(this.activeParams)
                    .subscribe((data) => {
                    this.pages = [];
                    for (let i = 1; i <= data.pages; i++) {
                        this.pages.push(i);
                    }
                    if (this.cart && this.cart.items.length > 0) {
                        this.products = data.items.map(product => {
                            if (this.cart) {
                                const productInCart = this.cart.items.find(item => item.product.id === product.id);
                                if (productInCart) {
                                    product.countInCart = productInCart.quantity;
                                }
                            }
                            return product;
                        });
                    }
                    else {
                        this.products = data.items;
                    }
                });
            });
        });
    }
    removeAppliedFilter(appliedFilter) {
        if (appliedFilter.urlParam === 'heightFrom' || appliedFilter.urlParam === 'diameterFrom'
            || appliedFilter.urlParam === 'heightTo' || appliedFilter.urlParam === 'diameterTo') {
            delete this.activeParams[appliedFilter.urlParam];
        }
        else {
            this.activeParams.types = this.activeParams.types.filter(item => item !== appliedFilter.urlParam);
        }
        this.activeParams.page = 1;
        this.router.navigate(["/catalog"], {
            queryParams: this.activeParams
        });
    }
    toogleSorting() {
        this.sortingOpen = !this.sortingOpen;
    }
    sort(value) {
        this.activeParams.sort = value;
        this.router.navigate(["/catalog"], {
            queryParams: this.activeParams
        });
    }
    openPage(page) {
        this.activeParams.page = page;
        this.router.navigate(["/catalog"], {
            queryParams: this.activeParams
        });
    }
    openPrevPage() {
        if (this.activeParams.page && this.activeParams.page > 1) {
            this.activeParams.page--;
            this.router.navigate(["/catalog"], {
                queryParams: this.activeParams
            });
        }
    }
    openNextPage() {
        if (this.activeParams.page && this.activeParams.page < this.pages.length) {
            this.activeParams.page++;
            this.router.navigate(["/catalog"], {
                queryParams: this.activeParams
            });
        }
    }
}
CatalogComponent.ɵfac = function CatalogComponent_Factory(t) { return new (t || CatalogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
CatalogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CatalogComponent, selectors: [["app-catalog"]], decls: 23, vars: 7, consts: [[1, "catalog"], [1, "container"], [1, "catalog-title"], [1, "catalog-head"], [1, "catalog-applied-filters"], ["class", "catalog-applied-filter", 4, "ngFor", "ngForOf"], [1, "catalog-sorting", 3, "click"], [1, "catalog-sorting-head"], ["width", "20", "height", "21", "viewBox", "0 0 20 21", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.0003 14.5C9.41693 14.5 8.83359 14.275 8.39193 13.8334L2.95859 8.40003C2.71693 8.15837 2.71693 7.75837 2.95859 7.5167C3.20026 7.27503 3.60026 7.27503 3.84193 7.5167L9.27526 12.95C9.67526 13.35 10.3253 13.35 10.7253 12.95L16.1586 7.5167C16.4003 7.27503 16.8003 7.27503 17.0419 7.5167C17.2836 7.75837 17.2836 8.15837 17.0419 8.40003L11.6086 13.8334C11.1669 14.275 10.5836 14.5 10.0003 14.5Z", "fill", "#2C2C2C"], [1, "catalog-sorting-body"], ["class", "catalog-sorting-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "catalog-layout"], [1, "catalog-filters"], [3, "categoryWithTypes", 4, "ngFor", "ngForOf"], ["type", "height"], ["type", "diameter"], [1, "catalog-products"], [3, "countInCart", "product", 4, "ngFor", "ngForOf"], ["class", "pagination", 4, "ngIf"], [1, "catalog-applied-filter"], [3, "click"], ["width", "16", "height", "17", "viewBox", "0 0 16 17", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_18516_954)"], ["x1", "1.93562", "y1", "3.1499", "x2", "13.9564", "y2", "15.1707", "stroke", "#A8ABA7", "stroke-linecap", "round"], ["x1", "13.9238", "y1", "3.12996", "x2", "1.90301", "y2", "15.1508", "stroke", "#A8ABA7", "stroke-linecap", "round"], [1, "catalog-sorting-item", 3, "click"], [3, "categoryWithTypes"], [3, "countInCart", "product"], [1, "pagination"], [1, "pagination-arrow", 3, "click"], ["width", "24", "height", "25", "viewBox", "0 0 24 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9.56988 5.98092C9.75988 5.98092 9.94988 6.04973 10.0999 6.19717C10.3899 6.48223 10.3899 6.95405 10.0999 7.2391L4.55988 12.6847L10.0999 18.1303C10.3899 18.4153 10.3899 18.8871 10.0999 19.1722C9.80988 19.4573 9.32988 19.4573 9.03988 19.1722L2.96988 13.2056C2.67988 12.9206 2.67988 12.4488 2.96988 12.1637L9.03988 6.19717C9.18988 6.04973 9.37988 5.98092 9.56988 5.98092Z", "fill", "#2C2C2C"], ["d", "M3.67 11.9474L20.5 11.9474C20.91 11.9474 21.25 12.2816 21.25 12.6847C21.25 13.0877 20.91 13.4219 20.5 13.4219L3.67 13.4219C3.26 13.4219 2.92 13.0877 2.92 12.6847C2.92 12.2816 3.26 11.9474 3.67 11.9474Z", "fill", "#2C2C2C"], [1, "pagination-pages"], ["class", "pagination-page", 3, "active", "click", 4, "ngFor", "ngForOf"], ["d", "M14.4301 19.3885C14.2401 19.3885 14.0501 19.3197 13.9001 19.1722C13.6101 18.8872 13.6101 18.4153 13.9001 18.1303L19.4401 12.6847L13.9001 7.23913C13.6101 6.95407 13.6101 6.48225 13.9001 6.19719C14.1901 5.91213 14.6701 5.91213 14.9601 6.19719L21.0301 12.1637C21.3201 12.4488 21.3201 12.9206 21.0301 13.2057L14.9601 19.1722C14.8101 19.3197 14.6201 19.3885 14.4301 19.3885Z", "fill", "#2C2C2C"], ["d", "M20.33 13.4219H3.5C3.09 13.4219 2.75 13.0877 2.75 12.6847C2.75 12.2817 3.09 11.9475 3.5 11.9475H20.33C20.74 11.9475 21.08 12.2817 21.08 12.6847C21.08 13.0877 20.74 13.4219 20.33 13.4219Z", "fill", "#2C2C2C"], [1, "pagination-page", 3, "click"]], template: function CatalogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " \u041A\u0430\u0442\u0430\u043B\u043E\u0433 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, CatalogComponent_div_6_Template, 8, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CatalogComponent_Template_div_click_7_listener() { return ctx.toogleSorting(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7)(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, CatalogComponent_div_14_Template, 2, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 12)(16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, CatalogComponent_category_filter_17_Template, 1, 1, "category-filter", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "category-filter", 15)(19, "category-filter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, CatalogComponent_product_card_21_Template, 1, 2, "product-card", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, CatalogComponent_div_22_Template, 11, 5, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.appliedFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("open", ctx.sortingOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.sortingOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.categoriesWithTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.pages.length > 1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_4__.ProductCardComponent, _shared_components_category_filter_category_filter_component__WEBPACK_IMPORTED_MODULE_5__.CategoryFilterComponent], styles: [".catalog[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-bottom: 110px;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .catalog-title[_ngcontent-%COMP%] {\n  font-family: \"Lora\", sans-serif;\n  font-weight: 400;\n  font-size: 36px;\n  font-style: normal;\n  color: #000000;\n  color: #202b21;\n  margin-bottom: 33px;\n  margin-left: 317px;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .catalog-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-left: 317px;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .catalog-applied-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .catalog-applied-filters[_ngcontent-%COMP%]   .catalog-applied-filter[_ngcontent-%COMP%] {\n  border: 1px solid #e7f1e8;\n  border-radius: 50px;\n  font-size: 16px;\n  color: #2c2c2c;\n  padding: 8px 14px;\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n  margin-bottom: 20px;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .catalog-applied-filters[_ngcontent-%COMP%]   .catalog-applied-filter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  cursor: pointer;\n  display: flex;\n  margin-left: 8px;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .catalog-sorting[_ngcontent-%COMP%] {\n  width: 190px;\n  min-width: 190px;\n  box-sizing: border-box;\n  position: relative;\n  font-size: 16px;\n  cursor: pointer;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .catalog-sorting[_ngcontent-%COMP%]   .catalog-sorting-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 0 12px 23px;\n  color: #2c2c2c;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .catalog-sorting[_ngcontent-%COMP%]   .catalog-sorting-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .catalog-sorting[_ngcontent-%COMP%]   .catalog-sorting-body[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  box-sizing: border-box;\n  z-index: 3;\n  padding: 13px 23px;\n  background: #F5F5F5;\n  border-radius: 0 0 5px 5px;\n  color: #8E8E8E;\n  display: none;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .catalog-sorting[_ngcontent-%COMP%]   .catalog-sorting-body[_ngcontent-%COMP%]   .catalog-sorting-item[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  cursor: pointer;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .catalog-sorting[_ngcontent-%COMP%]   .catalog-sorting-body[_ngcontent-%COMP%]   .catalog-sorting-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .catalog-sorting[_ngcontent-%COMP%]   .catalog-sorting-body[_ngcontent-%COMP%]   .catalog-sorting-item.active[_ngcontent-%COMP%] {\n  color: #313131;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .catalog-sorting.open[_ngcontent-%COMP%] {\n  width: 257px;\n  min-width: 257px;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .catalog-sorting.open[_ngcontent-%COMP%]   .catalog-sorting-head[_ngcontent-%COMP%] {\n  color: #000000;\n  background: #EBEBEB;\n  border-radius: 0 0 5px 5px;\n  padding-right: 23px;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .catalog-sorting.open[_ngcontent-%COMP%]   .catalog-sorting-body[_ngcontent-%COMP%] {\n  display: block;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .catalog-layout[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 10px;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .catalog-layout[_ngcontent-%COMP%]   .catalog-filters[_ngcontent-%COMP%] {\n  width: 257px;\n  min-width: 257px;\n  margin-right: 58px;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .catalog-layout[_ngcontent-%COMP%]   .catalog-products[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 26px 30px;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  margin-top: 79px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-arrow[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-arrow.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 30px;\n  margin-left: 30px;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   a.pagination-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  width: 60px;\n  height: 60px;\n  margin-right: 15px;\n  cursor: pointer;\n  font-size: 20px;\n  color: #2c2c2c;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   a.pagination-page.active[_ngcontent-%COMP%] {\n  background: #b6d5b9;\n  border-radius: 50%;\n}\n.catalog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   a.pagination-page[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL19taXhpbnMuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQUZGO0FBTUk7RUNFRiwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFREpJLGNFVmE7RUZXYixtQkFBQTtFQUNBLGtCQUFBO0FBQU47QUFHSTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFETjtBQUlJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFGTjtBQUlNO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjRTdCVTtFRjhCVixpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFGUjtBQUlRO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBRlY7QUFPSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUxOO0FBT007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0UxRFU7QUZxRGxCO0FBUVE7RUFDRSxpQkFBQTtBQU5WO0FBVU07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQVJSO0FBVVE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFSVjtBQVVVO0VBQ0UsZ0JBQUE7QUFSWjtBQVdVO0VBQ0UsY0FBQTtBQVRaO0FBY007RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFaUjtBQWFRO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQVhWO0FBY1E7RUFDRSxjQUFBO0FBWlY7QUFrQkk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFoQk47QUFrQk07RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWhCUjtBQW9CTTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7QUFsQlI7QUFzQkk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBcEJOO0FBc0JNO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBcEJSO0FBc0JRO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0FBcEJWO0FBd0JNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBdEJSO0FBd0JRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNFaktRO0FGMklsQjtBQXdCVTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUF0Qlo7QUF5QlU7RUFDRSxlQUFBO0FBdkJaIiwiZmlsZSI6ImNhdGFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL21peGluc1wiO1xuXG4uY2F0YWxvZyB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDExMHB4O1xuXG4gIC5jb250YWluZXIge1xuXG4gICAgLmNhdGFsb2ctdGl0bGUge1xuICAgICAgQGluY2x1ZGUgaGVhZC1sb3JhLTM2O1xuICAgICAgY29sb3I6ICRncmVlbi10ZXh0LWNvbG9yO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzNweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMTdweDtcbiAgICB9XG5cbiAgICAuY2F0YWxvZy1oZWFkIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXJnaW4tbGVmdDogMzE3cHg7XG4gICAgfVxuXG4gICAgLmNhdGFsb2ctYXBwbGllZC1maWx0ZXJzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgIC5jYXRhbG9nLWFwcGxpZWQtZmlsdGVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U3ZjFlODtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogJGdyZXktdGV4dC1jb2xvcjtcbiAgICAgICAgcGFkZGluZzogOHB4IDE0cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICAgIC5jYXRhbG9nLXNvcnRpbmcge1xuICAgICAgd2lkdGg6IDE5MHB4O1xuICAgICAgbWluLXdpZHRoOiAxOTBweDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIC5jYXRhbG9nLXNvcnRpbmctaGVhZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZzogMTJweCAwIDEycHggMjNweDtcbiAgICAgICAgY29sb3I6ICRncmV5LXRleHQtY29sb3I7XG4gICAgICAgIC8vY29sb3I6IGJsYWNrO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jYXRhbG9nLXNvcnRpbmctYm9keSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgIHBhZGRpbmc6IDEzcHggMjNweDtcbiAgICAgICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4gICAgICAgIGNvbG9yOiAjOEU4RThFO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgICAgIC5jYXRhbG9nLXNvcnRpbmctaXRlbSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzMxMzEzMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5vcGVuICB7XG4gICAgICAgIHdpZHRoOiAyNTdweDtcbiAgICAgICAgbWluLXdpZHRoOiAyNTdweDtcbiAgICAgICAgLmNhdGFsb2ctc29ydGluZy1oZWFkIHtcbiAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRUJFQkVCO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIzcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2F0YWxvZy1zb3J0aW5nLWJvZHkge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAuY2F0YWxvZy1sYXlvdXQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICAgIC5jYXRhbG9nLWZpbHRlcnMge1xuICAgICAgICB3aWR0aDogMjU3cHg7XG4gICAgICAgIG1pbi13aWR0aDogMjU3cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNThweDtcblxuICAgICAgfVxuXG4gICAgICAuY2F0YWxvZy1wcm9kdWN0cyB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgICAgIGdhcDogMjZweCAzMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wYWdpbmF0aW9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDc5cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAucGFnaW5hdGlvbi1hcnJvdyB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5wYWdpbmF0aW9uLXBhZ2VzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG5cbiAgICAgICAgYS5wYWdpbmF0aW9uLXBhZ2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGNvbG9yOiAkZ3JleS10ZXh0LWNvbG9yO1xuXG4gICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2I2ZDViOTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBoZWFkLWxvcmEtMzIge1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBjb2xvcjogJGdyZWVuLXRleHQtY29sb3Jcbn1cblxuQG1peGluIGhlYWQtbG9yYS0zNiB7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGNvbG9yOiAjMDAwMDAwXG59XG4iLCIkY29udGFpbmVyLXdpZHRoOiAxMjQwcHg7XG4kZ3JlZW4tdGV4dC1jb2xvcjogIzIwMmIyMTtcbiRncmV5LXRleHQtY29sb3I6ICMyYzJjMmM7XG4iXX0= */"] });


/***/ }),

/***/ 5581:
/*!**********************************************************!*\
  !*** ./src/app/views/product/detail/detail.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailComponent": () => (/* binding */ DetailComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/product.service */ 773);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/cart.service */ 5237);
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/favorite.service */ 4553);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/auth/auth.service */ 8951);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/product-card/product-card.component */ 3284);
/* harmony import */ var _shared_components_count_selector_count_selector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/count-selector/count-selector.component */ 9968);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7135);












function DetailComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34)(1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "path", 37)(4, "path", 38)(5, "path", 39)(6, "path", 40)(7, "path", 41)(8, "path", 42)(9, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 44)(11, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " \u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.product.lightning, " ");
} }
function DetailComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34)(1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "ellipse", 47)(4, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mask", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "path", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "path", 51)(8, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 44)(10, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " \u0412\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.product.humidity, " ");
} }
function DetailComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34)(1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "ellipse", 47)(4, "path", 53)(5, "path", 54)(6, "path", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 44)(8, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r3.product.temperature, " ");
} }
function DetailComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 56)(1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u0412\u044B\u0441\u043E\u0442\u0430: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r4.product.height, " \u0441\u043C");
} }
function DetailComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 56)(1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u0414\u0438\u0430\u043C\u0435\u0442\u0440 (\u0433\u043E\u0440\u0448\u043A\u0430): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r5.product.diameter, " \u0441\u043C");
} }
function DetailComponent_div_0__svg_svg_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "svg", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "path", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DetailComponent_div_0__svg_svg_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "svg", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "path", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DetailComponent_div_0_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DetailComponent_div_0_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DetailComponent_div_0_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailComponent_div_0_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r14.addToCart()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DetailComponent_div_0_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailComponent_div_0_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.removeFromCart()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function DetailComponent_div_0_42_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "product-card", 66);
} if (rf & 2) {
    const product_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product", product_r18);
} }
function DetailComponent_div_0_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, DetailComponent_div_0_42_ng_template_0_Template, 1, 1, "ng-template", 65);
} }
function DetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, DetailComponent_div_0_div_8_Template, 15, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, DetailComponent_div_0_div_9_Template, 14, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, DetailComponent_div_0_div_10_Template, 12, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, DetailComponent_div_0_div_11_Template, 5, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, DetailComponent_div_0_div_12_Template, 5, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 10)(14, "div", 11)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "count-selector", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onCountChange", function DetailComponent_div_0_Template_count_selector_onCountChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.updateCount($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 14)(21, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailComponent_div_0_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r23.updateFavorite()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, DetailComponent_div_0__svg_svg_22_Template, 2, 0, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, DetailComponent_div_0__svg_svg_23_Template, 2, 0, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, DetailComponent_div_0_span_24_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, DetailComponent_div_0_span_25_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, DetailComponent_div_0_button_26_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, DetailComponent_div_0_button_27_Template, 5, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 21)(29, "div", 22)(30, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, " \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 24)(33, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailComponent_div_0_Template_div_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](41); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r12.prev()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailComponent_div_0_Template_div_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](41); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r12.next()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 30)(40, "owl-carousel-o", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, DetailComponent_div_0_42_Template, 1, 0, null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.product.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("background-image: url('", ctx_r0.serverStaticPath + ctx_r0.product.image, "')");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.product.lightning);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.product.humidity);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.product.temperature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.product.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.product.diameter);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("count", ctx_r0.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.product.price, " BYN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.product.isInFavorite);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.product.isInFavorite);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.product.isInFavorite);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.product.isInFavorite);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.product.countInCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.product.countInCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r0.customOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.recommendedProducts);
} }
class DetailComponent {
    constructor(productService, activatedRoute, cartService, favoriteService, authService, _snackBar) {
        this.productService = productService;
        this.activatedRoute = activatedRoute;
        this.cartService = cartService;
        this.favoriteService = favoriteService;
        this.authService = authService;
        this._snackBar = _snackBar;
        this.count = 1;
        this.recommendedProducts = [];
        this.serverStaticPath = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.serverStaticPath;
        this.customOptions = {
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            navSpeed: 700,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                740: {
                    items: 3
                },
                940: {
                    items: 4
                }
            },
            nav: false
        };
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.productService.getProduct(params['url'])
                .subscribe((data) => {
                this.product = data;
                this.cartService.getCart()
                    .subscribe((cartData) => {
                    if (cartData) {
                        const productInCart = cartData.items.find(item => item.product.id === this.product.id);
                        if (productInCart) {
                            this.product.countInCart = productInCart.quantity;
                            this.count = this.product.countInCart;
                        }
                    }
                });
                if (this.authService.getIsLoggedIn()) {
                    this.favoriteService.getFavorites()
                        .subscribe((data) => {
                        if (data.error !== undefined) {
                            const error = data.message;
                            throw new Error(error);
                        }
                        const products = data;
                        const currentProductExist = products.find(item => item.id === this.product.id);
                        if (currentProductExist) {
                            this.product.isInFavorite = true;
                        }
                    });
                }
            });
        });
        this.productService.getBestProducts()
            .subscribe((data) => {
            this.recommendedProducts = data;
        });
    }
    updateCount(value) {
        if (this.product.countInCart) {
            this.count = value;
            this.cartService.updateCart(this.product.id, this.count)
                .subscribe((data) => {
                this.product.countInCart = this.count;
            });
        }
    }
    addToCart() {
        this.cartService.updateCart(this.product.id, this.count)
            .subscribe((data) => {
            this.product.countInCart = this.count;
        });
    }
    removeFromCart() {
        this.cartService.updateCart(this.product.id, 0)
            .subscribe((data) => {
            this.product.countInCart = 0;
            this.count = 1;
        });
    }
    updateFavorite() {
        if (!this.authService.getIsLoggedIn()) {
            this._snackBar.open('Для добавления в избранное необходимо авторизоваться');
            return;
        }
        if (this.product.isInFavorite) {
            this.favoriteService.removeFavorites(this.product.id)
                .subscribe((data) => {
                if (data.error) {
                    // ..
                    throw new Error(data.message);
                }
                this.product.isInFavorite = false;
            });
        }
        else {
            this.favoriteService.addFavorite(this.product.id)
                .subscribe((data) => {
                if (data.error !== undefined) {
                    throw new Error(data.message);
                }
                this.product.isInFavorite = true;
            });
        }
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_3__.FavoriteService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar)); };
DetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-detail"]], decls: 1, vars: 1, consts: [["class", "detail", 4, "ngIf"], [1, "detail"], [1, "container"], [1, "detail-title"], [1, "detail-product"], [1, "detail-image"], [1, "detail-info"], [1, "detail-info-items"], ["class", "detail-info-item", 4, "ngIf"], ["class", "detail-info-param", 4, "ngIf"], [1, "detail-info-params"], [1, "detail-info-params-count"], [3, "count", "onCountChange"], [1, "detail-info-params-price"], [1, "detail-info-actions"], [1, "button", "button-transparent", "button-icon", 3, "click"], ["width", "16", "height", "15", "viewBox", "0 0 16 15", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["width", "17", "height", "15", "viewBox", "0 0 17 15", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], [4, "ngIf"], ["class", "button", 3, "click", 4, "ngIf"], ["class", "button button-transparent button-in-cart", 3, "click", 4, "ngIf"], [1, "recommended-products"], [1, "carousel-header"], [1, "carousel-title"], [1, "carousel-arrows"], [1, "move-backward", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.5561 15C10.4013 15 10.2465 14.9435 10.1243 14.8224L4.8127 9.55746C3.94915 8.70151 3.94915 7.29647 4.8127 6.44052L10.1243 1.17563C10.3606 0.941456 10.7516 0.941456 10.9879 1.17563C11.2241 1.40981 11.2241 1.7974 10.9879 2.03158L5.67624 7.29647C5.2852 7.68407 5.2852 8.31392 5.67624 8.70151L10.9879 13.9664C11.2241 14.2006 11.2241 14.5882 10.9879 14.8224C10.8657 14.9354 10.7109 15 10.5561 15Z", "fill", "#202B21"], [1, "move-forward", 3, "click"], ["d", "M5.44392 1C5.59871 1 5.75349 1.05652 5.87569 1.17765L11.1873 6.44254C12.0508 7.29849 12.0508 8.70353 11.1873 9.55948L5.87569 14.8244C5.63944 15.0585 5.2484 15.0585 5.01215 14.8244C4.7759 14.5902 4.7759 14.2026 5.01215 13.9684L10.3238 8.70353C10.7148 8.31593 10.7148 7.68608 10.3238 7.29849L5.01215 2.0336C4.7759 1.79942 4.7759 1.41182 5.01215 1.17765C5.13435 1.0646 5.28914 1 5.44392 1Z", "fill", "#202B21"], [1, "carousel-items"], [3, "options"], ["owlCar", ""], [4, "ngFor", "ngForOf"], [1, "detail-info-item"], [1, "detail-info-item-icon"], ["width", "53", "height", "55", "viewBox", "0 0 53 55", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M37.4048 28.1161C37.0958 21.732 32.0783 16.7854 26.0972 16.7854C20.116 16.7854 15.0985 21.732 14.7896 28.1161H13C13.3116 20.8158 19.0562 14.9976 26.0972 14.9976C33.1381 14.9976 38.8828 20.8158 39.1943 28.1161H37.4048Z", "fill", "#519157"], ["d", "M26.1104 10V15.3099", "stroke", "#519157", "stroke-width", "2.38372", "stroke-linecap", "round"], ["d", "M26.1104 39.3608V44.3584", "stroke", "#519157", "stroke-width", "2.38372", "stroke-linecap", "round"], ["d", "M32.0693 36.8618L35.4404 40.3956", "stroke", "#519157", "stroke-width", "2.38372", "stroke-linecap", "round"], ["d", "M16.5752 40.3955L19.9463 36.8617", "stroke", "#519157", "stroke-width", "2.38372", "stroke-linecap", "round"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M19.6181 28.1162C19.5763 28.4223 19.5547 28.7351 19.5547 29.0533C19.5547 32.6758 22.3562 35.6125 25.812 35.6125C29.2678 35.6125 32.0692 32.6758 32.0692 29.0533C32.0692 28.7351 32.0476 28.4223 32.0059 28.1162H30.1965C30.2521 28.4177 30.2814 28.7308 30.2814 29.0533C30.2814 31.7688 28.2019 33.8248 25.812 33.8248C23.422 33.8248 21.3425 31.7688 21.3425 29.0533C21.3425 28.7308 21.3718 28.4177 21.4275 28.1162H19.6181Z", "fill", "#519157"], ["d", "M13.8436 28.4287H38.3662", "stroke", "#519157", "stroke-width", "1.78779", "stroke-linecap", "round"], [1, "detail-info-item-text"], [1, "detail-info-item-title"], [1, "detail-info-item-description"], ["cx", "26.2338", "cy", "27.5", "rx", "26.2338", "ry", "27.5", "fill", "white"], ["d", "M32.2881 15.6313C34.05 16.6837 35.6644 18.45 36.8691 20.5386C38.1693 22.7926 38.9424 25.3346 38.9424 27.5972C38.9424 32.1449 35.8301 35.5745 32.2832 35.5747C28.7362 35.5747 25.623 32.145 25.623 27.5972C25.623 25.3613 26.53 22.7467 27.916 20.4321C29.1873 18.3091 30.7891 16.5619 32.2881 15.6313Z", "stroke", "#519157", "stroke-width", "1.81634"], ["id", "path-3-inside-1_361_2119", "fill", "white"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M30.0855 34.7566C28.7479 38.5128 25.6229 40.9624 22.2926 40.9624C17.8737 40.9624 13.8163 36.6496 13.8163 30.6946C13.8163 27.7932 15.0002 24.3411 16.8519 21.2488C18.4669 18.5518 20.4573 16.3487 22.306 15.1063C24.4804 16.4933 26.4952 18.7295 28.027 21.3851C28.063 21.4474 28.0987 21.51 28.134 21.5727L28.6651 19.6418L29.1961 19.8023C27.3817 16.8817 24.9704 14.4035 22.2926 13C17.3522 15.5895 12 24.0207 12 30.6946C12 37.3685 16.6082 42.7788 22.2926 42.7788C26.5945 42.7788 30.28 39.6802 31.8182 35.2803L30.0855 34.7566Z"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M30.0855 34.7566C28.7479 38.5128 25.6229 40.9624 22.2926 40.9624C17.8737 40.9624 13.8163 36.6496 13.8163 30.6946C13.8163 27.7932 15.0002 24.3411 16.8519 21.2488C18.4669 18.5518 20.4573 16.3487 22.306 15.1063C24.4804 16.4933 26.4952 18.7295 28.027 21.3851C28.063 21.4474 28.0987 21.51 28.134 21.5727L28.6651 19.6418L29.1961 19.8023C27.3817 16.8817 24.9704 14.4035 22.2926 13C17.3522 15.5895 12 24.0207 12 30.6946C12 37.3685 16.6082 42.7788 22.2926 42.7788C26.5945 42.7788 30.28 39.6802 31.8182 35.2803L30.0855 34.7566Z", "fill", "#1D1D1D"], ["d", "M30.0855 34.7566L30.6109 33.018L28.9548 32.5175L28.3744 34.1473L30.0855 34.7566ZM16.8519 21.2488L15.2936 20.3157L16.8519 21.2488ZM22.306 15.1063L23.2827 13.5749L22.28 12.9353L21.2928 13.5988L22.306 15.1063ZM28.027 21.3851L26.4537 22.2926L26.4537 22.2926L28.027 21.3851ZM28.134 21.5727L26.552 22.465L28.7169 26.3029L29.8853 22.0543L28.134 21.5727ZM28.6651 19.6418L29.1905 17.9031L27.4077 17.3643L26.9138 19.1601L28.6651 19.6418ZM29.1961 19.8023L28.6706 21.541L33.2799 22.934L30.7389 18.8438L29.1961 19.8023ZM22.2926 13L23.1358 11.3912L22.2926 10.9493L21.4494 11.3912L22.2926 13ZM31.8182 35.2803L33.5328 35.8798L34.1585 34.0901L32.3437 33.5417L31.8182 35.2803ZM22.2926 42.7788C26.5504 42.7788 30.2591 39.6834 31.7966 35.366L28.3744 34.1473C27.2367 37.3421 24.6955 39.1461 22.2926 39.1461V42.7788ZM12 30.6946C12 37.3852 16.6225 42.7788 22.2926 42.7788V39.1461C19.1249 39.1461 15.6327 35.914 15.6327 30.6946H12ZM15.2936 20.3157C13.338 23.5815 12 27.3578 12 30.6946H15.6327C15.6327 28.2286 16.6625 25.1006 18.4103 22.182L15.2936 20.3157ZM21.2928 13.5988C19.1631 15.0301 17.0038 17.4599 15.2936 20.3157L18.4103 22.182C19.9301 19.6438 21.7515 17.6674 23.3191 16.6138L21.2928 13.5988ZM29.6004 20.4775C27.9563 17.6273 25.7543 15.1514 23.2827 13.5749L21.3292 16.6376C23.2065 17.8351 25.0341 19.8316 26.4537 22.2926L29.6004 20.4775ZM29.716 20.6803C29.6778 20.6125 29.6393 20.5449 29.6004 20.4775L26.4537 22.2926C26.4867 22.3499 26.5195 22.4074 26.552 22.465L29.716 20.6803ZM29.8853 22.0543L30.4164 20.1235L26.9138 19.1601L26.3827 21.091L29.8853 22.0543ZM28.1396 21.3805L28.6706 21.541L29.7215 18.0636L29.1905 17.9031L28.1396 21.3805ZM30.7389 18.8438C28.8024 15.7267 26.173 12.9831 23.1358 11.3912L21.4494 14.6088C23.7679 15.824 25.9609 18.0368 27.6532 20.7608L30.7389 18.8438ZM21.4494 11.3912C18.5749 12.8979 15.7865 15.9572 13.7353 19.3825C11.6758 22.8217 10.1837 26.9221 10.1837 30.6946H13.8163C13.8163 27.7932 15.0002 24.3411 16.8519 21.2488C18.712 18.1427 21.0699 15.6916 23.1358 14.6088L21.4494 11.3912ZM10.1837 30.6946C10.1837 38.0874 15.3426 44.5951 22.2926 44.5951V40.9624C17.8737 40.9624 13.8163 36.6496 13.8163 30.6946H10.1837ZM22.2926 44.5951C27.5339 44.5951 31.7997 40.8369 33.5328 35.8798L30.1037 34.6809C28.7602 38.5235 25.6551 40.9624 22.2926 40.9624V44.5951ZM32.3437 33.5417L30.6109 33.018L29.56 36.4953L31.2928 37.019L32.3437 33.5417Z", "fill", "#519157", "mask", "url(#path-3-inside-1_361_2119)"], ["d", "M29.9051 37.9016C29.9051 40.0783 28.2219 41.8428 26.1454 41.8428C24.069 41.8428 22.3857 40.0783 22.3857 37.9016C22.3857 35.725 24.069 33.9604 26.1454 33.9604C28.2219 33.9604 29.9051 35.725 29.9051 37.9016Z", "fill", "#519157"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M29.2788 31.3332V14.0129C29.2788 12.2826 27.8761 10.8798 26.1457 10.8798C24.4154 10.8798 23.0127 12.2826 23.0127 14.0129V31.3332H21.1328V14.0129C21.1328 11.2444 23.3772 9 26.1457 9C28.9143 9 31.1587 11.2444 31.1587 14.0129V31.3332H29.2788ZM31.1587 38.5586H21.1328V38.5587H23.0127H29.2788H31.1587V38.5586Z", "fill", "#519157"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M23.0128 29.3795C20.0691 30.7041 18 33.8389 18 37.4951C18 42.3493 21.6471 46.2843 26.146 46.2843C30.6449 46.2843 34.292 42.3493 34.292 37.4951C34.292 33.8388 32.2228 30.7039 29.2789 29.3794V31.5169C31.1202 32.6902 32.4121 34.8734 32.4121 37.4951C32.4121 41.4481 29.4747 44.4045 26.146 44.4045C22.8173 44.4045 19.8798 41.4481 19.8798 37.4951C19.8798 34.8736 21.1717 32.6904 23.0128 31.5171V29.3795Z", "fill", "#519157"], [1, "detail-info-param"], [1, "detail-info-param-name"], [1, "detail-info-param-data"], ["width", "16", "height", "15", "viewBox", "0 0 16 15", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M8 14.3628C7.7693 14.3628 7.54605 14.333 7.36 14.266C4.51721 13.2912 0 9.8307 0 4.71814C0 2.11349 2.10605 0 4.69581 0C5.95349 0 7.1293 0.491163 8 1.3693C8.8707 0.491163 10.0465 0 11.3042 0C13.894 0 16 2.12093 16 4.71814C16 9.83814 11.4828 13.2912 8.64 14.266C8.45395 14.333 8.2307 14.3628 8 14.3628Z", "fill", "#6CAC72"], ["width", "17", "height", "15", "viewBox", "0 0 17 15", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M8.5 14.6814C8.2693 14.6814 8.04605 14.6516 7.86 14.5846C5.01721 13.6098 0.5 10.1493 0.5 5.03674C0.5 2.43209 2.60605 0.318604 5.19581 0.318604C6.45349 0.318604 7.6293 0.809766 8.5 1.68791C9.3707 0.809766 10.5465 0.318604 11.8042 0.318604C14.394 0.318604 16.5 2.43953 16.5 5.03674C16.5 10.1567 11.9828 13.6098 9.14 14.5846C8.95395 14.6516 8.7307 14.6814 8.5 14.6814ZM5.19581 1.43488C3.22372 1.43488 1.61628 3.04977 1.61628 5.03674C1.61628 10.1195 6.50558 12.9474 8.22465 13.5353C8.3586 13.58 8.64884 13.58 8.78279 13.5353C10.4944 12.9474 15.3912 10.127 15.3912 5.03674C15.3912 3.04977 13.7837 1.43488 11.8116 1.43488C10.6805 1.43488 9.63116 1.96325 8.95395 2.8786C8.74558 3.16139 8.2693 3.16139 8.06093 2.8786C7.36884 1.95581 6.32698 1.43488 5.19581 1.43488Z", "fill", "#6CAC72"], [1, "button", 3, "click"], [1, "button", "button-transparent", "button-in-cart", 3, "click"], ["carouselSlide", ""], [3, "product"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, DetailComponent_div_0_Template, 43, 19, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_5__.ProductCardComponent, _shared_components_count_selector_count_selector_component__WEBPACK_IMPORTED_MODULE_6__.CountSelectorComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__.CarouselSlideDirective], styles: [".detail[_ngcontent-%COMP%] {\n  padding-top: 101px;\n  padding-bottom: 110px;\n}\n.detail[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%] {\n  font-family: \"Lora\", sans-serif;\n  font-weight: 400;\n  font-size: 36px;\n  font-style: normal;\n  color: #000000;\n}\n.detail[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .detail-product[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  margin-bottom: 120px;\n  display: flex;\n  justify-content: space-between;\n}\n.detail[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-image[_ngcontent-%COMP%] {\n  width: 528px;\n  height: 528px;\n  background-size: cover;\n  background-position: center;\n  border-radius: 10px;\n}\n.detail[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%] {\n  width: 602px;\n}\n.detail[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .detail-info-items[_ngcontent-%COMP%] {\n  margin-bottom: 51px;\n}\n.detail[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .detail-info-items[_ngcontent-%COMP%]   .detail-info-item[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  margin-top: 20px;\n  border-top: 1px solid #e7f1e8;\n  display: flex;\n}\n.detail[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .detail-info-items[_ngcontent-%COMP%]   .detail-info-item[_ngcontent-%COMP%]:first-child {\n  padding-top: 0;\n  margin-top: 0;\n  border-top: 0;\n}\n.detail[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .detail-info-items[_ngcontent-%COMP%]   .detail-info-item[_ngcontent-%COMP%]   .detail-info-item-text[_ngcontent-%COMP%] {\n  margin-left: 22px;\n  width: 528px;\n}\n.detail[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .detail-info-items[_ngcontent-%COMP%]   .detail-info-item[_ngcontent-%COMP%]   .detail-info-item-text[_ngcontent-%COMP%]   .detail-info-item-title[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  color: #202b21;\n  margin-bottom: 15px;\n}\n.detail[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .detail-info-items[_ngcontent-%COMP%]   .detail-info-item[_ngcontent-%COMP%]   .detail-info-item-text[_ngcontent-%COMP%]   .detail-info-item-description[_ngcontent-%COMP%] {\n  line-height: 130%;\n  font-size: 16px;\n  color: #2c2c2c;\n}\n.detail[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .detail-info-param[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  margin-top: 12px;\n}\n.detail[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .detail-info-param[_ngcontent-%COMP%]   .detail-info-param-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-right: 10px;\n}\n.detail[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .detail-info-params[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.detail[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .detail-info-params[_ngcontent-%COMP%]   .detail-info-params-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.detail[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .detail-info-params[_ngcontent-%COMP%]   .detail-info-params-count[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  margin-right: 20px;\n}\n.detail[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .detail-info-params[_ngcontent-%COMP%]   .detail-info-params-price[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 40px;\n  color: #313131;\n}\n.detail[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .detail-info-actions[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  display: flex;\n  align-items: center;\n}\n.detail[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .detail-info-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 290px;\n}\n.detail[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .detail-info-actions[_ngcontent-%COMP%]   button.button-transparent[_ngcontent-%COMP%] {\n  width: 307px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX21peGlucy5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBRkY7QUFNSTtFQ0VGLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FETEY7QUFHSTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFETjtBQUdNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUlNO0VBQ0UsWUFBQTtBQUZSO0FBSVE7RUFDRSxtQkFBQTtBQUZWO0FBSVU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FBRlo7QUFJWTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUZkO0FBS1k7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFIZDtBQUtjO0VBQ0UscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNFckRHO0VGc0RILG1CQUFBO0FBSGhCO0FBTWM7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjRTNERTtBRnVEbEI7QUFXUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVRWO0FBV1U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBVFo7QUFhUTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBWFY7QUFhVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQVhaO0FBYVk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVhkO0FBZVU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBYlo7QUFpQlE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQWZWO0FBaUJVO0VBQ0UsWUFBQTtBQWZaO0FBaUJZO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBZmQiLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9taXhpbnNcIjtcblxuLmRldGFpbCB7XG4gIHBhZGRpbmctdG9wOiAxMDFweDtcbiAgcGFkZGluZy1ib3R0b206IDExMHB4O1xuXG4gIC5jb250YWluZXIge1xuXG4gICAgLmRldGFpbC10aXRsZSB7XG4gICAgICBAaW5jbHVkZSBoZWFkLWxvcmEtMzY7XG4gICAgfVxuXG4gICAgLmRldGFpbC1wcm9kdWN0IHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMjBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgIC5kZXRhaWwtaW1hZ2Uge1xuICAgICAgICB3aWR0aDogNTI4cHg7XG4gICAgICAgIGhlaWdodDogNTI4cHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIH1cblxuICAgICAgLmRldGFpbC1pbmZvIHtcbiAgICAgICAgd2lkdGg6IDYwMnB4O1xuXG4gICAgICAgIC5kZXRhaWwtaW5mby1pdGVtcyB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTFweDtcblxuICAgICAgICAgIC5kZXRhaWwtaW5mby1pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdmMWU4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGV0YWlsLWluZm8taXRlbS10ZXh0IHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIycHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MjhweDtcblxuICAgICAgICAgICAgICAuZGV0YWlsLWluZm8taXRlbS10aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdyZWVuLXRleHQtY29sb3I7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5kZXRhaWwtaW5mby1pdGVtLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTMwJTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmV5LXRleHQtY29sb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXRhaWwtaW5mby1wYXJhbSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuXG4gICAgICAgICAgLmRldGFpbC1pbmZvLXBhcmFtLW5hbWUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGV0YWlsLWluZm8tcGFyYW1zIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgLmRldGFpbC1pbmZvLXBhcmFtcy1jb3VudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kZXRhaWwtaW5mby1wYXJhbXMtcHJpY2Uge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzEzMTMxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXRhaWwtaW5mby1hY3Rpb25zIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjkwcHg7XG5cbiAgICAgICAgICAgICYuYnV0dG9uLXRyYW5zcGFyZW50IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMwN3B4O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJlY29tbWVuZGVkLXByb2R1Y3RzIHtcblxuICAgIH1cbiAgfVxuXG59XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBoZWFkLWxvcmEtMzIge1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBjb2xvcjogJGdyZWVuLXRleHQtY29sb3Jcbn1cblxuQG1peGluIGhlYWQtbG9yYS0zNiB7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGNvbG9yOiAjMDAwMDAwXG59XG4iLCIkY29udGFpbmVyLXdpZHRoOiAxMjQwcHg7XG4kZ3JlZW4tdGV4dC1jb2xvcjogIzIwMmIyMTtcbiRncmV5LXRleHQtY29sb3I6ICMyYzJjMmM7XG4iXX0= */"] });


/***/ }),

/***/ 3621:
/*!*********************************************************!*\
  !*** ./src/app/views/product/product-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductRoutingModule": () => (/* binding */ ProductRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalog/catalog.component */ 9738);
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail/detail.component */ 5581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    { path: 'catalog', component: _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_0__.CatalogComponent },
    { path: 'product/:url', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__.DetailComponent }
];
class ProductRoutingModule {
}
ProductRoutingModule.ɵfac = function ProductRoutingModule_Factory(t) { return new (t || ProductRoutingModule)(); };
ProductRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProductRoutingModule });
ProductRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProductRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 1052:
/*!*************************************************!*\
  !*** ./src/app/views/product/product.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductModule": () => (/* binding */ ProductModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-routing.module */ 3621);
/* harmony import */ var _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog/catalog.component */ 9738);
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail/detail.component */ 5581);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







class ProductModule {
}
ProductModule.ɵfac = function ProductModule_Factory(t) { return new (t || ProductModule)(); };
ProductModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ProductModule });
ProductModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselModule,
        _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProductModule, { declarations: [_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_1__.CatalogComponent,
        _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__.DetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselModule,
        _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_product_product_module_ts.js.map