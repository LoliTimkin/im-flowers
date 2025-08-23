"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["common"],{

/***/ 4553:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/favorite.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoriteService": () => (/* binding */ FavoriteService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class FavoriteService {
    constructor(http) {
        this.http = http;
    }
    getFavorites() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + "favorites/");
    }
    removeFavorites(productId) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + "favorites/", {
            body: { productId }
        });
    }
    addFavorite(productId) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + "favorites/", { productId: productId });
    }
}
FavoriteService.ɵfac = function FavoriteService_Factory(t) { return new (t || FavoriteService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
FavoriteService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FavoriteService, factory: FavoriteService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map