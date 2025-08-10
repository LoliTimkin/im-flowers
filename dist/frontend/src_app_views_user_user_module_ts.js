"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_views_user_user_module_ts"],{

/***/ 4135:
/*!*****************************************************!*\
  !*** ./src/app/views/user/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/auth/auth.service */ 8951);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







const _c0 = function (a0) { return { "border-color": a0 }; };
class LoginComponent {
    constructor(fb, authService, _snackBar, router) {
        this.fb = fb;
        this.authService = authService;
        this._snackBar = _snackBar;
        this.router = router;
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            rememberMe: [false,],
        });
    }
    ngOnInit() {
    }
    login() {
        if (this.loginForm.valid && this.loginForm.value.email && this.loginForm.value.password) {
            this.authService.login(this.loginForm.value.email, this.loginForm.value.password, !!this.loginForm.value.rememberMe)
                .subscribe({
                next: (data) => {
                    let error = null;
                    if (data.error !== undefined) {
                        error = data.message;
                    }
                    const loginResponse = data;
                    if (!loginResponse.accessToken || !loginResponse.refreshToken || !loginResponse.userId) {
                        error = 'Ошибка авторизации';
                    }
                    if (error) {
                        this._snackBar.open(error);
                        throw new Error(error);
                    }
                    this.authService.setTokens(loginResponse.accessToken, loginResponse.refreshToken);
                    this.authService.userId = loginResponse.userId;
                    this._snackBar.open("Вы успешно авторизовались");
                    this.router.navigate(['/']);
                },
                error: (errorResponse) => {
                    if (errorResponse.error && errorResponse.error.message) {
                        this._snackBar.open(errorResponse.error.message);
                    }
                    else {
                        this._snackBar.open('ошибка авторизации');
                    }
                }
            });
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 23, vars: 8, consts: [[1, "login", 3, "formGroup"], [1, "container"], [1, "auth-form"], [1, "auth-title"], [1, "auth-inputs"], [1, "auth-input"], ["type", "text", "placeholder", "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430", "formControlName", "email", 1, "input", 3, "ngStyle"], ["type", "password", "placeholder", "\u041F\u0430\u0440\u043E\u043B\u044C", "formControlName", "password", 1, "input", 3, "ngStyle"], [1, "auth-checkbox"], ["type", "checkbox", "id", "remember", "formControlName", "rememberMe"], ["for", "remember"], [1, "auth-button"], [1, "button", 3, "disabled", "click"], [1, "auth-link"], ["routerLink", "/signup"], [1, "page-image"], ["src", "/assets/images/page/login.png", "alt", "\u0426\u0432\u0435\u0442\u043E\u043A \u043D\u0430 \u0444\u043E\u043D\u0435"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u0412\u043E\u0439\u0442\u0438 \u0432 \u043B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043C\u0435\u043D\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11)(15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_15_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u0412\u043E\u0439\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " \u041D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.touched) ? "red" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ((tmp_2_0 = ctx.loginForm.get("password")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.loginForm.get("password")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.loginForm.get("password")) == null ? null : tmp_2_0.touched) ? "red" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: [".auth-form[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 110px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-title[_ngcontent-%COMP%] {\n  font-family: \"Lora\", sans-serif;\n  font-weight: 400;\n  font-size: 36px;\n  line-height: 130%;\n  color: #202b21;\n  margin-bottom: 35px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-input[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 422px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-checkbox[_ngcontent-%COMP%] {\n  max-width: 422px;\n  display: flex;\n  align-items: baseline;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 130%;\n  margin-left: 10px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #519057;\n  text-decoration: none;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-button[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-button[_ngcontent-%COMP%]   button.button[_ngcontent-%COMP%] {\n  width: 422px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-link[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 16px;\n  color: #2c2c2c;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  margin-left: 5px;\n  color: #519057;\n}\n.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page-image[_ngcontent-%COMP%] {\n  margin-left: 49px;\n}\n.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX2F1dGgtZm9ybS5zY3NzIiwibG9naW4uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7QUNERjtBREdFO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNFVmU7RUZXZixtQkFBQTtBQ0RKO0FESUU7RUFDRSxtQkFBQTtBQ0ZKO0FESUk7RUFDRSxrQkFBQTtBQ0ZOO0FESU07RUFDRSxZQUFBO0FDRlI7QURNSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FDSk47QURNTTtFQUNFLFNBQUE7QUNKUjtBRE9NO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNMUjtBRE9RO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDTFY7QURZRTtFQUNFLGdCQUFBO0FDVko7QURZSTtFQUNFLFlBQUE7QUNWTjtBRGNFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxjRTFEYztBRDhDbEI7QURjSTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDWk47QUFuREE7RUFDRSxhQUFBO0FBc0RGO0FBcERFO0VBQ0UsaUJBQUE7QUFzREo7QUFwREk7RUFDRSxzQkFBQTtBQXNETiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuLmF1dGgtZm9ybSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDExMHB4O1xuXG4gIC5hdXRoLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gICAgY29sb3I6ICRncmVlbi10ZXh0LWNvbG9yO1xuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIH1cblxuICAuYXV0aC1pbnB1dHMge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgICAuYXV0aC1pbnB1dCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAgIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDQyMnB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hdXRoLWNoZWNrYm94IHtcbiAgICAgIG1heC13aWR0aDogNDIycHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuXG4gICAgICBpbnB1dCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogIzUxOTA1NztcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIC5hdXRoLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgIGJ1dHRvbi5idXR0b24ge1xuICAgICAgd2lkdGg6IDQyMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5hdXRoLWxpbmsge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICRncmV5LXRleHQtY29sb3I7XG5cbiAgICBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICBjb2xvcjogIzUxOTA1NztcbiAgICB9XG4gIH1cblxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvYXV0aC1mb3JtXCI7XG5cbi5sb2dpbiAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcblxuICAucGFnZS1pbWFnZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQ5cHg7XG5cbiAgICBpbWcge1xuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICB9XG4gIH1cbn1cbiIsIiRjb250YWluZXItd2lkdGg6IDEyNDBweDtcbiRncmVlbi10ZXh0LWNvbG9yOiAjMjAyYjIxO1xuJGdyZXktdGV4dC1jb2xvcjogIzJjMmMyYztcbiJdfQ== */"] });


/***/ }),

/***/ 1879:
/*!*******************************************************!*\
  !*** ./src/app/views/user/signup/signup.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/auth/auth.service */ 8951);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_directives_password_repeat_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/password-repeat.directive */ 3674);








const _c0 = function (a0) { return { "border-color": a0 }; };
class SignupComponent {
    constructor(fb, authService, _snackBar, router) {
        this.fb = fb;
        this.authService = authService;
        this._snackBar = _snackBar;
        this.router = router;
        this.signupForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)],
            passwordRepeat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)],
            agree: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.requiredTrue],
        });
    }
    ngOnInit() {
    }
    signup() {
        if (this.signupForm.valid && this.signupForm.value.email && this.signupForm.value.password
            && this.signupForm.value.passwordRepeat && this.signupForm.value.agree) {
            this.authService.signup(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.passwordRepeat)
                .subscribe({
                next: (data) => {
                    let error = null;
                    if (data.error !== undefined) {
                        error = data.message;
                    }
                    const loginResponse = data;
                    if (!loginResponse.accessToken || !loginResponse.refreshToken || !loginResponse.userId) {
                        error = 'Ошибка авторизации';
                    }
                    if (error) {
                        this._snackBar.open(error);
                        throw new Error(error);
                    }
                    this.authService.setTokens(loginResponse.accessToken, loginResponse.refreshToken);
                    this.authService.userId = loginResponse.userId;
                    this._snackBar.open("Вы успешно зарегистриролись");
                    this.router.navigate(['/']);
                },
                error: (errorResponse) => {
                    if (errorResponse.error && errorResponse.error.message) {
                        this._snackBar.open(errorResponse.error.message);
                    }
                    else {
                        this._snackBar.open('ошибка регистрации');
                    }
                }
            });
        }
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
SignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 30, vars: 11, consts: [["PasswordRepeat", "", 1, "signup", 3, "formGroup"], [1, "container"], [1, "auth-form"], [1, "auth-title"], [1, "auth-inputs"], [1, "auth-input"], ["type", "text", "placeholder", "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430", "formControlName", "email", 1, "input", 3, "ngStyle"], ["type", "password", "placeholder", "\u041F\u0430\u0440\u043E\u043B\u044C", "formControlName", "password", 1, "input", 3, "ngStyle"], ["type", "password", "placeholder", "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C", "formControlName", "passwordRepeat", 1, "input", 3, "ngStyle"], [1, "auth-checkbox"], ["type", "checkbox", "id", "agree", "formControlName", "agree"], ["for", "agree"], ["href", "#"], [1, "auth-button"], [1, "button", 3, "disabled", "click"], [1, "auth-link"], ["routerLink", "/login"], [1, "page-image"], ["src", "/assets/images/page/signup.png", "alt", "\u0426\u0432\u0435\u0442\u043E\u043A \u043D\u0430 \u0444\u043E\u043D\u0435"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " \u042F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " \u0438 \u0434\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 13)(22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_22_listener() { return ctx.signup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " \u0423\u0436\u0435 \u0435\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "\u0412\u043E\u0439\u0434\u0438\u0442\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ((tmp_1_0 = ctx.signupForm.get("email")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.signupForm.get("email")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.signupForm.get("email")) == null ? null : tmp_1_0.touched) ? "red" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, ((tmp_2_0 = ctx.signupForm.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.signupForm.get("password")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.signupForm.get("email")) == null ? null : tmp_2_0.touched) ? "red" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, ((tmp_3_0 = ctx.signupForm.get("email")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.signupForm.get("passwordRepeat")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.signupForm.get("email")) == null ? null : tmp_3_0.touched) ? "red" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.signupForm.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _shared_directives_password_repeat_directive__WEBPACK_IMPORTED_MODULE_1__.PasswordRepeatDirective], styles: [".auth-form[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 110px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-title[_ngcontent-%COMP%] {\n  font-family: \"Lora\", sans-serif;\n  font-weight: 400;\n  font-size: 36px;\n  line-height: 130%;\n  color: #202b21;\n  margin-bottom: 35px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-input[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 422px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-checkbox[_ngcontent-%COMP%] {\n  max-width: 422px;\n  display: flex;\n  align-items: baseline;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 130%;\n  margin-left: 10px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #519057;\n  text-decoration: none;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-button[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-button[_ngcontent-%COMP%]   button.button[_ngcontent-%COMP%] {\n  width: 422px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-link[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 16px;\n  color: #2c2c2c;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  margin-left: 5px;\n  color: #519057;\n}\n.signup[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.signup[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.signup[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page-image[_ngcontent-%COMP%] {\n  margin-left: 222px;\n}\n.signup[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX2F1dGgtZm9ybS5zY3NzIiwic2lnbnVwLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0FDREY7QURHRTtFQUNFLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRVZlO0VGV2YsbUJBQUE7QUNESjtBRElFO0VBQ0UsbUJBQUE7QUNGSjtBRElJO0VBQ0Usa0JBQUE7QUNGTjtBRElNO0VBQ0UsWUFBQTtBQ0ZSO0FETUk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQ0pOO0FETU07RUFDRSxTQUFBO0FDSlI7QURPTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDTFI7QURPUTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ0xWO0FEWUU7RUFDRSxnQkFBQTtBQ1ZKO0FEWUk7RUFDRSxZQUFBO0FDVk47QURjRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0UxRGM7QUQ4Q2xCO0FEY0k7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1pOO0FBbkRBO0VBQ0UsZ0JBQUE7QUFzREY7QUFwREU7RUFDRSxhQUFBO0FBc0RKO0FBcERJO0VBQ0Usa0JBQUE7QUFzRE47QUFwRE07RUFDRSxzQkFBQTtBQXNEUiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbi5hdXRoLWZvcm0ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMTBweDtcblxuICAuYXV0aC10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICAgIGNvbG9yOiAkZ3JlZW4tdGV4dC1jb2xvcjtcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICB9XG5cbiAgLmF1dGgtaW5wdXRzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gICAgLmF1dGgtaW5wdXQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiA0MjJweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYXV0aC1jaGVja2JveCB7XG4gICAgICBtYXgtd2lkdGg6IDQyMnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcblxuICAgICAgaW5wdXQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIGxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTMwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICM1MTkwNTc7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICAuYXV0aC1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICBidXR0b24uYnV0dG9uIHtcbiAgICAgIHdpZHRoOiA0MjJweDtcbiAgICB9XG4gIH1cblxuICAuYXV0aC1saW5rIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAkZ3JleS10ZXh0LWNvbG9yO1xuXG4gICAgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgY29sb3I6ICM1MTkwNTc7XG4gICAgfVxuICB9XG5cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2F1dGgtZm9ybVwiO1xuXG4uc2lnbnVwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcblxuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLnBhZ2UtaW1hZ2Uge1xuICAgICAgbWFyZ2luLWxlZnQ6IDIyMnB4O1xuXG4gICAgICBpbWcge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJGNvbnRhaW5lci13aWR0aDogMTI0MHB4O1xuJGdyZWVuLXRleHQtY29sb3I6ICMyMDJiMjE7XG4kZ3JleS10ZXh0LWNvbG9yOiAjMmMyYzJjO1xuIl19 */"] });


/***/ }),

/***/ 7095:
/*!***************************************************!*\
  !*** ./src/app/views/user/user-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRoutingModule": () => (/* binding */ UserRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 4135);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup/signup.component */ 1879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent },
    { path: "signup", component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__.SignupComponent }
];
class UserRoutingModule {
}
UserRoutingModule.ɵfac = function UserRoutingModule_Factory(t) { return new (t || UserRoutingModule)(); };
UserRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UserRoutingModule });
UserRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 6369:
/*!*******************************************!*\
  !*** ./src/app/views/user/user.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModule": () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-routing.module */ 7095);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 4135);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ 1879);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







class UserModule {
}
UserModule.ɵfac = function UserModule_Factory(t) { return new (t || UserModule)(); };
UserModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_user_user_module_ts.js.map