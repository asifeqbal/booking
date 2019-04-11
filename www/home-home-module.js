(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>    \r\n    <ion-icon name=\"search\" slot=\"end\" size=\"large\"></ion-icon>   \r\n    <ion-title>\r\n        <ion-img src=\"/assets/logo8.png\"></ion-img>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <!-- <video autoplay muted loop id=\"myVideo\">\r\n        <source src=\"rain.mp4\" type=\"video/mp4\">\r\n      </video> -->\r\n\r\n      <ion-slides pager=\"true\" autoplay=\"1000\" loop=\"true\" speed=\"500\" pager=\"true\" #mySlider [options]=\"options\" (ionSlidesDidLoad)=\"slideChanged(mySlider)\">\r\n\r\n          <ion-slide>\r\n              <ion-card>\r\n                  <ion-card-header>\r\n                    <ion-img src=\"/assets/kesari.jpg\"></ion-img>\r\n                    \r\n                  </ion-card-header>\r\n              </ion-card>\r\n          </ion-slide>          \r\n          <ion-slide>\r\n              <ion-card>\r\n                  <ion-card-header>\r\n                    <ion-img src=\"/assets/captain.jpg\"></ion-img>\r\n                    \r\n                  </ion-card-header>\r\n              </ion-card>\r\n          </ion-slide>\r\n      \r\n          <ion-slide>\r\n              <ion-card>\r\n                  <ion-card-header>\r\n                    <ion-img src=\"/assets/badla.jpg\"></ion-img>\r\n                    \r\n                  </ion-card-header>\r\n              </ion-card>\r\n\r\n          </ion-slide>\r\n\r\n        </ion-slides>\r\n\r\n      <ion-card class=\"welcome-card\">\r\n          <ion-img src=\"/assets/raees.jpg\"></ion-img>\r\n           \r\n            <ion-item>            \r\n            <ion-icon name=\"star\" ></ion-icon>\r\n            <ion-icon name=\"star\" ></ion-icon>\r\n            <ion-icon name=\"star-half\"></ion-icon>\r\n            <ion-icon name=\"star-outline\"></ion-icon>\r\n            <ion-card-subtitle color=\"danger\" slot=\"end\">02 Mar,2019</ion-card-subtitle>\r\n           </ion-item>\r\n        <ion-item>\r\n            <ion-card-title size=\"large\">Raees</ion-card-title>\r\n           \r\n          <ion-button icon=\"fa-rotate-left\" slot=\"end\">Book Ticket</ion-button> \r\n        </ion-item>\r\n      </ion-card>\r\n\r\n   <ion-grid>\r\n      <ion-row>\r\n          <ion-col col-6>\r\n              <ion-item href=\"#\" class=\"activated\" >\r\n                  <ion-img src=\"/assets/jaan.jpg\"></ion-img>                 \r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label text-wrap>\r\n                    <ion-text color=\"primary\">\r\n                      <h2>Jab Tak Hai Jaan</h2>\r\n                    </ion-text>\r\n                    <p>08 Mar,2019</p>\r\n                    <ion-button expand=\"block\">Book</ion-button>                    \r\n                </ion-label>\r\n             </ion-item>\r\n            \r\n          </ion-col>\r\n          <ion-col col-6>\r\n              <ion-item href=\"#\" >\r\n                  <ion-img src=\"/assets/khan.jpg\"></ion-img>                 \r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label text-wrap>\r\n                    <ion-text color=\"primary\">\r\n                      <h2>My Name Is Khan</h2>\r\n                    </ion-text>\r\n                    <p>07 Mar,2019</p>\r\n                    <ion-button expand=\"block\">Book</ion-button>                    \r\n                </ion-label>\r\n             </ion-item>\r\n          </ion-col>          \r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col col-6>\r\n                <ion-item href=\"#\" >\r\n                    <ion-img src=\"/assets/swadesh.jpg\" expand=\"block\"></ion-img>                 \r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label text-wrap>\r\n                      <ion-text color=\"primary\">\r\n                        <h2>Swadesh</h2>\r\n                      </ion-text>\r\n                      <p>12 Mar,2019</p>\r\n                      <ion-button expand=\"block\">Book</ion-button>                    \r\n                  </ion-label>\r\n               </ion-item>\r\n            </ion-col>\r\n            <ion-col col-6>\r\n                <ion-item href=\"#\"  >\r\n                    <ion-img src=\"/assets/don2.jpg\" expand=\"block\"></ion-img>                 \r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label text-wrap>\r\n                      <ion-text color=\"primary\">\r\n                        <h2>Don 2</h2>\r\n                      </ion-text>\r\n                      <p>17 Mar,2019</p>\r\n                      <ion-button expand=\"block\">Book</ion-button>                    \r\n                  </ion-label>\r\n               </ion-item>\r\n            </ion-col>          \r\n          </ion-row>\r\n   </ion-grid>\r\n\r\n   <ion-card class=\"welcome-card\">\r\n      <ion-img src=\"/assets/raees.jpg\"></ion-img>\r\n       \r\n        <ion-item>            \r\n        <ion-icon name=\"star\" ></ion-icon>\r\n        <ion-icon name=\"star\" ></ion-icon>\r\n        <ion-icon name=\"star-half\"></ion-icon>\r\n        <ion-icon name=\"star-outline\"></ion-icon>\r\n        <ion-card-subtitle color=\"danger\" slot=\"end\">02 Mar,2019</ion-card-subtitle>\r\n       </ion-item>\r\n\r\n    <ion-card-header>\r\n      <ion-card-content>  \r\n        <ion-card-title size=\"large\">Raees</ion-card-title>\r\n        <ion-card-subtitle>2 hrs 40 min</ion-card-subtitle>\r\n       </ion-card-content> \r\n      <ion-button icon=\"fa-rotate-left\">Book Ticket</ion-button> \r\n    </ion-card-header>\r\n  </ion-card>\r\n\r\n</ion-content >\r\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\nion-toolbar {\n  --background: url('bg9.png');\n  --color: #ffffff; }\n\nion-content {\n  --background: url('vd1.mp4'); }\n\n.card ion-button {\n  float: left; }\n\n.star ion-icon {\n  font-size: 35px; }\n\n.rating ion-icon {\n  font-size: 35px; }\n\n.rating p {\n  font-size: 20px;\n  padding-top: -15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFVzZXJcXERvY3VtZW50c1xcR2l0SHViXFxib29raW5nL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFPbEI7RUFFRSw0QkFBYTtFQUNiLGdCQUFRLEVBQUE7O0FBR1Y7RUFDRSw0QkFBYSxFQUFBOztBQUlmO0VBQ0UsV0FBVSxFQUFBOztBQUtaO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxlQUFlO0VBQUMsa0JBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8vIGlvbi1jb250ZW50e1xyXG4vLyAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvYmc5LnBuZycpOyAgXHJcblxyXG4vLyB9XHJcbmlvbi10b29sYmFye1xyXG4gIC8vIC0tYmFja2dyb3VuZDogIzhDMTkxOTtcclxuICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2JnOS5wbmcnKTtcclxuICAtLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL3ZkMS5tcDQnKTtcclxuXHJcbn1cclxuXHJcbi5jYXJkIGlvbi1idXR0b257XHJcbiAgZmxvYXQ6bGVmdDtcclxufVxyXG5cclxuXHJcblxyXG4uc3RhciBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcblxyXG4ucmF0aW5nIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuLnJhdGluZyBwIHtcclxuICBmb250LXNpemU6IDIwcHg7cGFkZGluZy10b3A6LTE1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.slideChanged = function (slides) {
        slides.startAutoplay();
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        })
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map