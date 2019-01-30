webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Battaglia.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Battle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Board; });
/* unused harmony export BoardItem */
var Battle = /** @class */ (function () {
    function Battle() {
    }
    return Battle;
}());

var Board = /** @class */ (function () {
    function Board() {
        this.guesses = 0;
        this.matrix = [];
        for (var i = 0; i < 10; i++) {
            this.matrix[i] = [];
            for (var j = 0; j < 10; j++) {
                this.matrix[i][j] = new BoardItem(i, j);
            }
        }
    }
    return Board;
}());

var BoardItem = /** @class */ (function () {
    function BoardItem(x, y) {
        this.x = x;
        this.y = y;
    }
    return BoardItem;
}());



/***/ }),

/***/ "./src/app/Ship.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ship; });
var Ship = /** @class */ (function () {
    function Ship() {
    }
    return Ship;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__battaglia_battaglia_component__ = __webpack_require__("./src/app/battaglia/battaglia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_list_game_list_component__ = __webpack_require__("./src/app/game-list/game-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_editor_message_editor_component__ = __webpack_require__("./src/app/message-editor/message-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_list_user_list_component__ = __webpack_require__("./src/app/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu_component__ = __webpack_require__("./src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_login_user_login_component__ = __webpack_require__("./src/app/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__message_list_message_list_component__ = __webpack_require__("./src/app/message-list/message-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_signup_user_signup_component__ = __webpack_require__("./src/app/user-signup/user-signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__user_login_user_login_component__["a" /* UserLoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_9__user_signup_user_signup_component__["a" /* UserSignupComponent */] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_4__menu_menu_component__["a" /* MenuComponent */] },
    { path: 'userlist', component: __WEBPACK_IMPORTED_MODULE_3__user_list_user_list_component__["a" /* UserListComponent */] },
    { path: 'gamelist', component: __WEBPACK_IMPORTED_MODULE_1__game_list_game_list_component__["a" /* GameListComponent */] },
    { path: 'battaglia/:gameid', component: __WEBPACK_IMPORTED_MODULE_0__battaglia_battaglia_component__["a" /* BattagliaComponent */] },
    { path: 'sendmessages', component: __WEBPACK_IMPORTED_MODULE_2__message_editor_message_editor_component__["a" /* MessageEditorComponent */] },
    { path: 'messages', component: __WEBPACK_IMPORTED_MODULE_8__message_list_message_list_component__["a" /* MessageListComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".bottomfooter {\r\n    margin-top: 2em;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\" >\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(us) {
        this.us = us;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_editor_message_editor_component__ = __webpack_require__("./src/app/message-editor/message-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_list_message_list_component__ = __webpack_require__("./src/app/message-list/message-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__partite_service__ = __webpack_require__("./src/app/partite.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__partite_http_service__ = __webpack_require__("./src/app/partite-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__message_service__ = __webpack_require__("./src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__message_http_service__ = __webpack_require__("./src/app/message-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_http_service__ = __webpack_require__("./src/app/user-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_login_user_login_component__ = __webpack_require__("./src/app/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_signup_user_signup_component__ = __webpack_require__("./src/app/user-signup/user-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__socketio_service__ = __webpack_require__("./src/app/socketio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__menu_menu_component__ = __webpack_require__("./src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_list_user_list_component__ = __webpack_require__("./src/app/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__game_list_game_list_component__ = __webpack_require__("./src/app/game-list/game-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__battaglia_battaglia_component__ = __webpack_require__("./src/app/battaglia/battaglia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__chat_chat_component__ = __webpack_require__("./src/app/chat/chat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Services















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__message_editor_message_editor_component__["a" /* MessageEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_6__message_list_message_list_component__["a" /* MessageListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__user_login_user_login_component__["a" /* UserLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__user_signup_user_signup_component__["a" /* UserSignupComponent */],
                __WEBPACK_IMPORTED_MODULE_17__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_18__user_list_user_list_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_19__game_list_game_list_component__["a" /* GameListComponent */],
                __WEBPACK_IMPORTED_MODULE_20__battaglia_battaglia_component__["a" /* BattagliaComponent */],
                __WEBPACK_IMPORTED_MODULE_21__chat_chat_component__["a" /* ChatComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_11__user_service__["a" /* UserService */], useClass: __WEBPACK_IMPORTED_MODULE_12__user_http_service__["a" /* UserHttpService */] },
                { provide: __WEBPACK_IMPORTED_MODULE_7__partite_service__["a" /* PartiteService */], useClass: __WEBPACK_IMPORTED_MODULE_8__partite_http_service__["a" /* PartiteHttpService */] },
                { provide: __WEBPACK_IMPORTED_MODULE_16__socketio_service__["a" /* SocketioService */], useClass: __WEBPACK_IMPORTED_MODULE_16__socketio_service__["a" /* SocketioService */] },
                { provide: __WEBPACK_IMPORTED_MODULE_9__message_service__["a" /* MessageService */], useClass: __WEBPACK_IMPORTED_MODULE_10__message_http_service__["a" /* MessageHttpService */] /* Here we can select the specifc service instance */ }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/battaglia/battaglia.component.css":
/***/ (function(module, exports) {

module.exports = "div#board {\r\n\tposition: relative;\r\n\twidth: 300px;\r\n\theight: 300px;\r\n\tmargin: auto;\r\n\t/*background: url(\"content/board.jpg\") no-repeat;*/\r\n\tbackground-size: 300px 300px;\r\n}\r\n.hit {\r\n\tbackground-color: black;\r\n\tbackground-size: 20px 20px;\r\n}\r\n.boat {\r\n\tbackground: url(\"data:image/png;base64,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\") no-repeat center center;\r\n\tbackground-size: 20px 20px;\r\n}\r\n.sunk {\r\n\tbackground-color: red;\r\n\tbackground-size: 20px 20px;\r\n}\r\n.miss {\r\n\tbackground: url(\"data:image/png;base64,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\") no-repeat center center;\r\n\tbackground-size: 20px 20px;\r\n}\r\ntable {\r\n\tborder-spacing: 0px; \r\n\tposition: absolute;\r\n\tleft: 51px;\r\n\ttop: 34px;\r\n\twidth: 198px;\r\n\theight: 232px;\r\n\tbackground-color: transparent!important;\r\n\tborder-color: transparent!important;\r\n}\r\ntbody{\r\n\tbackground-color: transparent!important;\r\n\tborder-color: transparent!important;\r\n}\r\ntr{\r\n\tbackground-color: blueviolet;\r\n    border-color: transparent!important;\r\n}\r\ntd {\r\n\twidth: 20px!important;\r\n\theight: 20px!important;\r\n    padding: 0px 0px!important;\r\n    border: 1px solid green;\r\n}"

/***/ }),

/***/ "./src/app/battaglia/battaglia.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body *ngIf=\"loaded\">\n      <a > Partita :{{gameid}}</a>\n      <div *ngIf='partita.gameStatus== 0'> Attesa secondo giocatore</div>\n      <div *ngIf='partita.gameStatus== 4 && iswin()'> \n          <h1>Partita finita hai vinto</h1>\n        <li><a routerLink=\"/menu\">Torna al menu</a></li>\n      </div>\n      <div *ngIf='(partita.gameStatus== 4)&&(!iswin())'>\n          <h1> Partita finita hai perso</h1>\n          <li><a routerLink=\"/menu\">Torna al menu</a></li>\n      </div>\n      <div *ngIf='(partita.gameStatus== 2)||(partita.gameStatus== 1)||(partita.gameStatus== 3)'>\n       <h1  *ngIf='!(turno)'> Non è il tuo turno attendi avversario..</h1>\n    <div *ngIf='turno'>\n         \n        <div *ngIf='partita.gameStatus== 3' id=\"board\">\n            <div>\n                <label>Opponent</label>\n              </div>\n        <table>\n            <tr *ngFor=\"let row of OpponentBoard.matrix\">\n                <td (click)=\"fire(col.y, col.x,gameid)\" *ngFor=\"let col of row\" [ngClass]=\"{'miss': (opponentIsHit(col.y,col.x)==1), 'hit': (opponentIsHit(col.y,col.x)==2),'sunk':(opponentIsHit(col.y,col.x)==2)&& opponentSunk(col.y,col.x) }\"></td>\n            </tr>\n          </table>\n        </div>\n        <div>\n          <label>Me</label>\n        </div>\n        <div>\n        <button *ngIf='cacciaindex>=0'(click)=\"setShip(Cacciatorpediniere,true);\"> Cacciatorpediniere oriz</button> \n        <button *ngIf='sottomarinoindex>3'(click)=\"setShip(Sottomarino,true);\" >Sottomarino oriz</button>\n        <button *ngIf='carrozzataindex>5'(click)=\"setShip(Corazzata,true);\">Corazzata oriz</button>\n        <button *ngIf='portaindex==8'(click)=\"setShip(Portaerei,true);\">Portaeri oriz</button>\n        </div>\n        <div>\n          <button *ngIf='cacciaindex>=0'(click)=\"setShip(Cacciatorpediniere,false);\"> Cacciatorpediniere verticale</button> \n          <button *ngIf='sottomarinoindex>3'(click)=\"setShip(Sottomarino,false);\" >Sottomarino verticale</button>\n          <button *ngIf='carrozzataindex>5'(click)=\"setShip(Corazzata,false);\">Corazzata verticale</button>\n          <button *ngIf='portaindex==8'(click)=\"setShip(Portaerei,false);\">Portaeri verticale</button>\n          </div>\n        <div id=\"board\">\n        \n        <table>\n            <tr *ngFor=\"let row of MyBoard.matrix\">\n                <td (click)=\"post_ship(col.y,col.x,gameid,myindex,MyShip.horizontal)\" *ngFor=\"let col of row\" [ngClass]=\"{'boat': hasBoat(col.y,col.x)&&(myGridIsHit(col.y,col.x)==0)&&!(myGridisSunk(col.y,col.x)),'hit':(myGridIsHit(col.y,col.x)==2)&&!(myGridisSunk(col.y,col.x)),'sunk':(myGridIsHit(col.y,col.x)==2)&& myGridisSunk(col.y,col.x),'miss':!(hasBoat(col.y,col.x))&&(myGridIsHit(col.y,col.x)==1) } \"></td>\n            </tr>\n        </table>\n\n        \n      </div>\n      </div>\n      <div>\n        <h1 *ngIf='!(setnave)'> attenzione posizionamento non possibile selezionare nave o verificare posizione</h1>\n      </div>\n      <app-chat [theGame]=\"partita\"></app-chat> \n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/battaglia/battaglia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BattagliaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Ship__ = __webpack_require__("./src/app/Ship.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Battaglia__ = __webpack_require__("./src/app/Battaglia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partite_service__ = __webpack_require__("./src/app/partite.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__socketio_service__ = __webpack_require__("./src/app/socketio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BattagliaComponent = /** @class */ (function () {
    function BattagliaComponent(route, sio, gm, us, router) {
        this.route = route;
        this.sio = sio;
        this.gm = gm;
        this.us = us;
        this.router = router;
        this.loaded = false;
        this.MyBoard = new __WEBPACK_IMPORTED_MODULE_1__Battaglia__["a" /* Board */]();
        this.OpponentBoard = new __WEBPACK_IMPORTED_MODULE_1__Battaglia__["a" /* Board */]();
        this.Cacciatorpediniere = new __WEBPACK_IMPORTED_MODULE_0__Ship__["a" /* Ship */]();
        this.Sottomarino = new __WEBPACK_IMPORTED_MODULE_0__Ship__["a" /* Ship */]();
        this.Corazzata = new __WEBPACK_IMPORTED_MODULE_0__Ship__["a" /* Ship */]();
        this.Portaerei = new __WEBPACK_IMPORTED_MODULE_0__Ship__["a" /* Ship */]();
        this.MyShip = new __WEBPACK_IMPORTED_MODULE_0__Ship__["a" /* Ship */]();
        this.cacciaindex = 3;
        this.sottomarinoindex = 5;
        this.carrozzataindex = 7;
        this.portaindex = 8;
        this.setnave = true;
        this.myGrid = null;
        this.opponentGrid = null;
        this.MyShip.horizontal = true;
        this.MyShip.size = 0;
        this.Cacciatorpediniere.size = 2;
        this.Sottomarino.size = 3;
        this.Corazzata.size = 4;
        this.Portaerei.size = 5;
        this.Sottomarino.horizontal = true;
        this.Cacciatorpediniere.horizontal = true;
        this.Corazzata.horizontal = true;
        this.Portaerei.horizontal = true;
    }
    BattagliaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.gameid = params.gameid; });
        this.get_game();
        this.sio.connect().subscribe(function (m) {
            _this.get_game();
        });
    };
    //funzione per ottenere il gioco
    BattagliaComponent.prototype.get_game = function () {
        var _this = this;
        this.gm.get_gameid(this.gameid).subscribe(function (games) {
            _this.partita = games;
            _this.get_turn();
            _this.get_grid();
            _this.loaded = true;
        }, function (err) {
            // Try to renew the token
            _this.us.renew().subscribe(function () {
                // Succeeded
                _this.get_game();
            }, function (err2) {
                // Error again, we really need to logout
                _this.logout();
            });
        });
    };
    //funzione per ottenere i campi di gioco 
    BattagliaComponent.prototype.get_grid = function () {
        var _this = this;
        if (this.partita.players.length <= 1)
            return;
        this.gm.get_grid(this.gameid, this.us.get_id()).subscribe(function (grids) {
            _this.myGrid = grids.myGrid;
            _this.opponentGrid = grids.opponentGrid;
        }, function (err) {
            // Try to renew the token
            _this.us.renew().subscribe(function () {
                // Succeeded
                _this.get_game();
            }, function (err2) {
                // Error again, we really need to logout
                // this.logout();
            });
        });
    };
    //funzione per ottenere il turno
    BattagliaComponent.prototype.get_turn = function () {
        var _this = this;
        if (this.partita.gameStatus == 0) {
            return;
        }
        this.gm.get_turn(this.gameid, this.us.get_id()).subscribe(function (turno) {
            _this.turno = turno;
        }, function (err) {
            // Try to renew the token
            _this.us.renew().subscribe(function () {
                // Succeeded
                _this.get_turn();
            }, function (err2) {
                console.log('generato errore turno');
                // Error again, we really need to logout
                //this.logout();
            });
        });
    };
    //funzione  per verificare  la posizione dell'avversario nell'array player
    BattagliaComponent.prototype.findOpponent = function (id) {
        var user = JSON.parse(this.partita.players[0]);
        if (id != user.userId)
            return 0;
        else
            return 1;
    };
    //funzione per impostare la nave da passare
    BattagliaComponent.prototype.setShip = function (selected, horizontal) {
        this.setnave = true;
        Object.assign(this.MyShip, selected);
        this.MyShip.horizontal = horizontal;
        if (this.MyShip.size == 2) {
            this.myindex = this.cacciaindex;
        }
        if (this.MyShip.size == 3) {
            this.myindex = this.sottomarinoindex;
        }
        if (this.MyShip.size == 4) {
            this.myindex = this.carrozzataindex;
        }
        if (this.MyShip.size == 5) {
            this.myindex = this.portaindex;
        }
    };
    //funzione per posizionare la nave
    BattagliaComponent.prototype.post_ship = function (col, row, gameid, gridIndex, horizontal) {
        var _this = this;
        if (this.MyShip.size == 0) {
            this.setnave = false;
            return;
        }
        var txt = ' { "gameId" :"' + gameid + '",'
            + '"shipIndex" :' + gridIndex + ','
            + '"x":' + col + ',"y":' + row + ',"horizontal":' + horizontal + '}';
        var dati = JSON.parse(txt);
        this.gm.post_ship(dati).subscribe(function (esito) {
            if (esito) {
                if ((0 <= gridIndex) && (gridIndex <= 3))
                    _this.cacciaindex = _this.cacciaindex - 1;
                if ((4 <= gridIndex) && (gridIndex <= 5))
                    _this.sottomarinoindex = _this.sottomarinoindex - 1;
                if ((6 <= gridIndex) && (gridIndex <= 7))
                    _this.carrozzataindex = _this.carrozzataindex - 1;
                if (gridIndex == 8)
                    _this.portaindex = _this.portaindex - 1;
                _this.MyShip.size = 0;
                _this.setnave = true;
            }
            else {
                _this.setnave = false;
            }
        }, function (error) {
            _this.setnave = false;
            console.log('Error occurred while posting: ' + error);
        });
    };
    //funzione per fare il colpo
    BattagliaComponent.prototype.fire = function (x, y, gameid) {
        var txt = ' { "id" :"' + gameid + '",'
            + '"x" :' + x + ',"y":' + y + '}';
        var dati = JSON.parse(txt);
        this.gm.post_shot(dati).subscribe(function () {
        }, function (error) {
        });
    };
    BattagliaComponent.prototype.hasBoat = function (col, row) {
        var index = row * 10 + col;
        if (this.myGrid == null)
            return;
        if (this.myGrid[index].ship != -1)
            return true;
        return false;
    };
    BattagliaComponent.prototype.myGridisSunk = function (col, row) {
        var index = row * 10 + col;
        if (this.myGrid == null)
            return;
        if ((this.myGrid[index].sunk != null) && (this.myGrid[index].sunk != undefined))
            return this.myGrid[index].sunk;
        return false;
    };
    BattagliaComponent.prototype.opponentSunk = function (col, row) {
        var index = row * 10 + col;
        if (this.opponentGrid == null)
            return;
        if ((this.opponentGrid[index].sunk != null) && (this.opponentGrid[index].sunk != undefined))
            return this.opponentGrid[index].sunk;
        return false;
    };
    BattagliaComponent.prototype.myGridIsHit = function (col, row) {
        var index = row * 10 + col;
        if (this.myGrid == null)
            return;
        return this.myGrid[index].shot;
    };
    BattagliaComponent.prototype.opponentIsHit = function (col, row) {
        var index = row * 10 + col;
        if (this.opponentGrid == null)
            return;
        return this.opponentGrid[index].shot;
    };
    //verifica se sei il vincitore
    BattagliaComponent.prototype.iswin = function () {
        if (this.partita.winningPlayer == null)
            return;
        if (this.partita.winningPlayer == this.findOpponent(this.us.get_id()))
            return false;
        return true;
    };
    BattagliaComponent.prototype.logout = function () {
        this.us.logout();
        this.router.navigate(['/']);
    };
    BattagliaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-battaglia',
            template: __webpack_require__("./src/app/battaglia/battaglia.component.html"),
            styles: [__webpack_require__("./src/app/battaglia/battaglia.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_6__socketio_service__["a" /* SocketioService */], __WEBPACK_IMPORTED_MODULE_3__partite_service__["a" /* PartiteService */], __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], BattagliaComponent);
    return BattagliaComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "\n \n <div class=\"jumbotron\">\n\n  <h2>Chat del Game </h2>\n  <div class=\"container\">\n      <div class=\"form-group\">\n\n        <!--<label for=\"messagetext\">Message</label>-->\n        <textarea class=\"form-control\"  [(ngModel)]=\"chat.content\"  #messagetx id=\"messagetext\" \n        rows=\"3\" (keyup.enter)=\"post_message()\" placeholder=\"Enter your message here\"></textarea>\n      </div>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"post_message()\" >Post <i class=\"fas fa-paper-plane\"></i></button>\n  </div>\n\n</div>\n<div *ngFor=\"let message of messages\"  > \n    <div class=\"card-body\" >\n        <h5 class=\"card-title\"><i class=\"far fa-envelope\"></i>&nbsp;From: {{message.authormail}}</h5>      \n        <h6 class=\"card-subtitle mb-2 text-muted\">{{message.timestamp | date}} / {{message.timestamp | date:'shortTime'}}</h6>\n        <p class=\"card-text\">{{ message.content }}</p>\n      </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("./src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__socketio_service__ = __webpack_require__("./src/app/socketio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatComponent = /** @class */ (function () {
    function ChatComponent(sio, ms, us, router) {
        this.sio = sio;
        this.ms = ms;
        this.us = us;
        this.router = router;
        this.messages = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.get_receivermessages(this.theGame._id);
        this.sio.connect().subscribe(function (m) {
            _this.get_receivermessages(_this.theGame._id);
        });
        this.set_empty();
    };
    ChatComponent.prototype.set_empty = function () {
        this.chat = { tags: [], content: '', timestamp: new Date(), authormail: '', receiver: this.theGame._id };
    };
    ChatComponent.prototype.get_receivermessages = function (mail) {
        var _this = this;
        this.ms.get_receivermessages(mail).subscribe(function (messages) {
            _this.messages = messages;
        }, function (err) {
            // Try to renew the token
            _this.us.renew().subscribe(function () {
                // Succeeded
                _this.get_receivermessages(_this.theGame._id);
            }, function (err2) {
                // Error again, we really need to logout
                _this.logout();
            });
        });
    };
    ChatComponent.prototype.post_message = function () {
        var _this = this;
        this.chat.timestamp = new Date();
        this.chat.authormail = this.us.get_mail();
        this.ms.post_message(this.chat).subscribe(function (m) {
            // console.log('chatposted');
            _this.set_empty();
        }, function (error) {
            console.log('Error occurred while posting: ' + error);
        });
    };
    ChatComponent.prototype.logout = function () {
        this.us.logout();
        this.router.navigate(['/']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('theGame'),
        __metadata("design:type", Object)
    ], ChatComponent.prototype, "theGame", void 0);
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__("./src/app/chat/chat.component.html"),
            styles: [__webpack_require__("./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__socketio_service__["a" /* SocketioService */], __WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/game-list/game-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/game-list/game-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>  \n  <ul>  \n   <li><a routerLink=\"/menu\">Torna al menu</a></li>\n  </ul>  \n </nav>\n <div class=\"game-body\" >\n   <div class=\"btn-crea\"  >\n      <button class=\"btn-crea\"  (click)=\"Create_game(us.get_id())\" >Crea nuova partita</button>  \n    </div>  \n\n<h2>Elenco partite</h2>\n<div *ngFor=\"let game of games\"  > \n    <div class=\"game-body\" >\n        <div class=\"btn-partecipa\"  [routerLink]=\"['/battaglia', game._id]\" routerLinkActive=\"active\"  (click)=\"Join_user(game._id,us.get_id())\" >\n            <button class=\"btn-partecipa\" >Partecipa</button>  \n          </div>  \n              <h5 class=\"game-title\">ID {{game._id}}</h5>\n        <h5 class=\"game-title\" *ngIf= \"game.gameStatus == 0 \">Stato: waiting</h5>        \n            </div>\n</div>\n\n<ul class=\"nav justify-content-end bottomfooter\">\n  <li class=\"nav-item\">\n    <div class=\"btn-group dropup\">\n      <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        {{us.get_username()}}\n      </button>\n      <div class=\"dropdown-menu\">\n        <div class=\"dropdown-item\" href=\"#\">{{us.get_mail()}}</div>\n        <div *ngIf=\"us.is_admin()\" class=\"dropdown-item\" href=\"#\"><i class=\"fas fa-check\"></i> Admin role</div>\n        <div *ngIf=\"us.is_player()\" class=\"dropdown-item\" href=\"#\"><i class=\"fas fa-check\"></i> Palyer role</div>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item nav-link\" (click)=\"logout()\" >Logout</a>\n      </div>\n    </div>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/game-list/game-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partite_service__ = __webpack_require__("./src/app/partite.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__socketio_service__ = __webpack_require__("./src/app/socketio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameListComponent = /** @class */ (function () {
    function GameListComponent(sio, gm, us, router) {
        this.sio = sio;
        this.gm = gm;
        this.us = us;
        this.router = router;
        this.games = [];
    }
    GameListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.get_listgames();
        this.sio.connect().subscribe(function (m) {
            _this.get_listgames();
        });
    };
    GameListComponent.prototype.get_listgames = function () {
        var _this = this;
        this.gm.get_gamelist().subscribe(function (games) {
            _this.games = games;
        }, function (err) {
            // Try to renew the token
            _this.us.renew().subscribe(function () {
                // Succeeded
                _this.get_listgames();
            }, function (err2) {
                // Error again, we really need to logout
                _this.logout();
            });
        });
    };
    GameListComponent.prototype.Join_user = function (idgame, idus) {
        var txt = ' { "id" :"' + idgame + '",' + '"userId" :"' + idus + '"}';
        var dati = JSON.parse(txt);
        this.gm.join_game(dati).subscribe(function () {
        }, function (error) {
            console.log('Error occurred while posting: ' + error);
        });
    };
    GameListComponent.prototype.Create_game = function (idus) {
        var _this = this;
        var text = ' { "user1Id" :"' + idus + '"' + '}';
        var id = JSON.parse(text);
        this.gm.post_game(id).subscribe(function (partita) {
            _this.partita = partita;
            _this.router.navigate(['/battaglia', _this.partita._id]);
        }, function (error) {
            console.log('Error occurred while posting: ' + error);
        });
    };
    GameListComponent.prototype.logout = function () {
        this.us.logout();
        this.router.navigate(['/']);
    };
    GameListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game-list',
            template: __webpack_require__("./src/app/game-list/game-list.component.html"),
            styles: [__webpack_require__("./src/app/game-list/game-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__socketio_service__["a" /* SocketioService */], __WEBPACK_IMPORTED_MODULE_1__partite_service__["a" /* PartiteService */], __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], GameListComponent);
    return GameListComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>  \r\n  <ul>  \r\n   <li><a routerLink=\"/messages\">Gestione messaggi</a></li>\r\n   <li><a routerLink=\"/userlist\">Classifica utenti</a></li>\r\n   <li><a routerLink=\"/gamelist\">Partite</a></li>\r\n   \r\n  </ul>  \r\n </nav>\r\n <ul class=\"nav justify-content-end bottomfooter\">\r\n    <li class=\"nav-item\">\r\n      <div class=\"btn-group dropup\">\r\n        <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          {{us.get_username()}}\r\n        </button>\r\n        <div class=\"dropdown-menu\">\r\n          <div class=\"dropdown-item\" href=\"#\">{{us.get_mail()}}</div>\r\n          <div *ngIf=\"us.is_admin()\" class=\"dropdown-item\" href=\"#\"><i class=\"fas fa-check\"></i> Admin role</div>\r\n          <div *ngIf=\"us.is_player()\" class=\"dropdown-item\" href=\"#\"><i class=\"fas fa-check\"></i> Palyer role</div>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item nav-link\" (click)=\"logout()\" >Logout</a>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__socketio_service__ = __webpack_require__("./src/app/socketio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuComponent = /** @class */ (function () {
    function MenuComponent(sio, us, router) {
        this.sio = sio;
        this.us = us;
        this.router = router;
    }
    MenuComponent.prototype.logout = function () {
        this.us.logout();
        this.router.navigate(['/']);
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("./src/app/menu/menu.component.html"),
            styles: [__webpack_require__("./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__socketio_service__["a" /* SocketioService */], __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/message-editor/message-editor.component.css":
/***/ (function(module, exports) {

module.exports = ".tag {\r\n    font-size: 1.5em;\r\n    margin: 3px;\r\n}"

/***/ }),

/***/ "./src/app/message-editor/message-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n\r\n  <h2>Manda un messaggio</h2>\r\n  <div class=\"container\">\r\n  <div class=\"form-group\">\r\n\r\n    <!--<label for=\"messagetext\">Message</label>-->\r\n    <input type=\"text\" #receivername class=\"form-control\" id=\"rectxt\" placeholder=\"Insert receiver\" [(ngModel)]=\"message.receiver\">\r\n    <textarea class=\"form-control\" [(ngModel)]=\"message.content\" #messagetx id=\"messagetext\" \r\n    rows=\"3\" (keyup.enter)=\"post_message()\" placeholder=\"Enter your message here\"></textarea>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col col-lg-2\">\r\n      <label class=\"sr-only\" for=\"tagtext\">tags</label>\r\n      <div class=\"input-group mb-2\">\r\n        <div class=\"input-group-prepend\">\r\n          <div class=\"input-group-text\">@</div>\r\n        </div>\r\n        <input type=\"text\" #tagname class=\"form-control\" id=\"tagtext\" placeholder=\"add tags...\" (keyup.enter)=\"add_tag(tagname.value); tagname.value=''\" >\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-auto\">\r\n      <span *ngFor=\"let tag of get_tags()\" class=\"badge badge-secondary tag\">{{tag}} \r\n          <i class=\"fas fa-times-circle\"></i>\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"post_message()\" >Post <i class=\"fas fa-paper-plane\"></i></button>\r\n  </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/message-editor/message-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("./src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageEditorComponent = /** @class */ (function () {
    function MessageEditorComponent(ms) {
        this.ms = ms;
        this.posted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    MessageEditorComponent.prototype.ngOnInit = function () {
        this.set_empty();
    };
    MessageEditorComponent.prototype.set_empty = function () {
        this.message = { tags: [], content: '', timestamp: new Date(), authormail: '', receiver: '' };
    };
    MessageEditorComponent.prototype.get_tags = function () {
        return this.message.tags;
    };
    MessageEditorComponent.prototype.get_receiver = function () {
        return this.message.receiver;
    };
    MessageEditorComponent.prototype.add_tag = function (tag) {
        this.message.tags = this.message.tags.concat([tag]);
    };
    MessageEditorComponent.prototype.post_message = function () {
        var _this = this;
        this.message.timestamp = new Date();
        this.ms.post_message(this.message).subscribe(function (m) {
            console.log('Message posted');
            _this.set_empty();
            _this.posted.emit(m);
        }, function (error) {
            console.log('Error occurred while posting: ' + error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], MessageEditorComponent.prototype, "posted", void 0);
    MessageEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-message-editor',
            template: __webpack_require__("./src/app/message-editor/message-editor.component.html"),
            styles: [__webpack_require__("./src/app/message-editor/message-editor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]])
    ], MessageEditorComponent);
    return MessageEditorComponent;
}());



/***/ }),

/***/ "./src/app/message-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_ErrorObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ErrorObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessageHttpService = /** @class */ (function () {
    function MessageHttpService(http, us) {
        this.http = http;
        this.us = us;
        this.messages = [];
        console.log('Message service instantiated');
        console.log('User service token: ' + us.get_token());
    }
    MessageHttpService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                'body was: ' + JSON.stringify(error.error));
        }
        // return an ErrorObservable with a user-facing error message
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */]('Something bad happened; please try again later.');
    };
    MessageHttpService.prototype.create_options = function (params) {
        if (params === void 0) { params = {}; }
        return {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
                authorization: 'Bearer ' + this.us.get_token(),
                'cache-control': 'no-cache',
                'Content-Type': 'application/json',
            }),
            params: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpParams */]({ fromObject: params })
        };
    };
    MessageHttpService.prototype.get_messages = function () {
        return this.http.get(this.us.url + '/messages', this.create_options({ limit: '10', skip: '0' })).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    MessageHttpService.prototype.get_receivermessages = function (mail) {
        return this.http.get(this.us.url + '/messages/' + mail, this.create_options()).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    MessageHttpService.prototype.post_message = function (m) {
        console.log('Posting ' + JSON.stringify(m));
        return this.http.post(this.us.url + '/messages', m, this.create_options()).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    MessageHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]])
    ], MessageHttpService);
    return MessageHttpService;
}());



/***/ }),

/***/ "./src/app/message-list/message-list.component.css":
/***/ (function(module, exports) {

module.exports = ".tag {\r\n    font-size: 1em;\r\n    margin: 3px;\r\n}"

/***/ }),

/***/ "./src/app/message-list/message-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>  \n  <ul>  \n   <li><a routerLink=\"/menu\">Torna al menu</a></li>\n  </ul>  \n </nav>\n \n<app-message-editor (posted)=\"get_receivermessages(this.us.get_mail())\" ></app-message-editor>\n<h2>Messaggi ricevuti</h2>\n<div *ngFor=\"let message of messages\"  > \n    <div class=\"card-body\" >\n        <h5 class=\"card-title\"><i class=\"far fa-envelope\"></i>&nbsp;From: {{message.authormail}}</h5>\n        <h5 class=\"card-title\"><i class=\"far fa-envelope\"></i>&nbsp;To: {{message.receiver}}</h5>        \n        <h6 class=\"card-subtitle mb-2 text-muted\">{{message.timestamp | date}} / {{message.timestamp | date:'shortTime'}}</h6>\n        <p class=\"card-text\">{{ message.content }}</p>\n        <span *ngFor=\"let tag of message.tags\" class=\"badge badge-secondary tag\">{{tag}}</span>\n    </div>\n</div>\n\n<ul class=\"nav justify-content-end bottomfooter\">\n  <li class=\"nav-item\">\n    <div class=\"btn-group dropup\">\n      <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        {{us.get_username()}}\n      </button>\n      <div class=\"dropdown-menu\">\n        <div class=\"dropdown-item\" href=\"#\">{{us.get_mail()}}</div>\n        <div *ngIf=\"us.is_admin()\" class=\"dropdown-item\" href=\"#\"><i class=\"fas fa-check\"></i> Admin role</div>\n        <div *ngIf=\"us.is_player()\" class=\"dropdown-item\" href=\"#\"><i class=\"fas fa-check\"></i> Palyer role</div>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item nav-link\" (click)=\"logout()\" >Logout</a>\n      </div>\n    </div>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/message-list/message-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("./src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__socketio_service__ = __webpack_require__("./src/app/socketio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessageListComponent = /** @class */ (function () {
    function MessageListComponent(sio, ms, us, router) {
        this.sio = sio;
        this.ms = ms;
        this.us = us;
        this.router = router;
        this.messages = [];
    }
    MessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.get_receivermessages(this.us.get_mail());
        this.sio.connect().subscribe(function (m) {
            _this.get_receivermessages(_this.us.get_mail());
        });
    };
    MessageListComponent.prototype.get_receivermessages = function (mail) {
        var _this = this;
        this.ms.get_receivermessages(mail).subscribe(function (messages) {
            _this.messages = messages;
        }, function (err) {
            // Try to renew the token
            _this.us.renew().subscribe(function () {
                // Succeeded
                _this.get_receivermessages(_this.us.get_mail());
            }, function (err2) {
                // Error again, we really need to logout
                _this.logout();
            });
        });
    };
    MessageListComponent.prototype.logout = function () {
        this.us.logout();
        this.router.navigate(['/']);
    };
    MessageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-message-list',
            template: __webpack_require__("./src/app/message-list/message-list.component.html"),
            styles: [__webpack_require__("./src/app/message-list/message-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__socketio_service__["a" /* SocketioService */], __WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], MessageListComponent);
    return MessageListComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.get_messages = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.messages);
    };
    MessageService.prototype.get_receivermessages = function (mail) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.messages);
    };
    MessageService.prototype.post_message = function (m) {
        this.messages.unshift(m);
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(m);
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/partite-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartiteHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_ErrorObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ErrorObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PartiteHttpService = /** @class */ (function () {
    function PartiteHttpService(http, us) {
        this.http = http;
        this.us = us;
        this.partite = [];
    }
    PartiteHttpService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                'body was: ' + JSON.stringify(error.error));
        }
        // return an ErrorObservable with a user-facing error message
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */]('Something bad happened; please try again later.');
    };
    PartiteHttpService.prototype.create_options = function (params) {
        if (params === void 0) { params = {}; }
        return {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
                authorization: 'Bearer ' + this.us.get_token(),
                'cache-control': 'no-cache',
                'Content-Type': 'application/json',
            }),
            params: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpParams */]({ fromObject: params })
        };
    };
    PartiteHttpService.prototype.get_gamelist = function () {
        return this.http.get(this.us.url + '/games/status/' + 0, this.create_options()).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    PartiteHttpService.prototype.get_gameid = function (id) {
        return this.http.get(this.us.url + '/games/' + id, this.create_options()).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    PartiteHttpService.prototype.get_turn = function (game, id) {
        return this.http.get(this.us.url + '/games/' + game + '/turn/' + id, this.create_options()).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    PartiteHttpService.prototype.get_grid = function (id, userId) {
        return this.http.get(this.us.url + '/games/' + id + '/battlefields/' + userId, this.create_options()).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    PartiteHttpService.prototype.join_game = function (dati) {
        return this.http.post(this.us.url + '/games/join', dati, this.create_options()).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    PartiteHttpService.prototype.post_game = function (id) {
        return this.http.post(this.us.url + '/games', id, this.create_options()).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    PartiteHttpService.prototype.post_ship = function (dati) {
        return this.http.post(this.us.url + '/games/ships', dati, this.create_options()).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    PartiteHttpService.prototype.post_shot = function (dati) {
        return this.http.post(this.us.url + '/games/shot', dati, this.create_options()).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    PartiteHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]])
    ], PartiteHttpService);
    return PartiteHttpService;
}());



/***/ }),

/***/ "./src/app/partite.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PartiteService = /** @class */ (function () {
    function PartiteService() {
        this.partite = [];
    }
    PartiteService.prototype.get_gamelist = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.partite);
    };
    PartiteService.prototype.get_gameid = function (id) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.partite);
    };
    PartiteService.prototype.get_grid = function (id, userId) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.partite);
    };
    PartiteService.prototype.get_turn = function (game, id) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])();
    };
    PartiteService.prototype.join_game = function (dati) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])();
    };
    PartiteService.prototype.post_game = function (id) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])();
    };
    PartiteService.prototype.post_ship = function (dati) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])();
    };
    PartiteService.prototype.post_shot = function (dati) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])();
    };
    PartiteService.prototype.get_id = function () {
        return;
    };
    PartiteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PartiteService);
    return PartiteService;
}());



/***/ }),

/***/ "./src/app/socketio.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import io = require('socket.io-client');

var SocketioService = /** @class */ (function () {
    function SocketioService(us) {
        this.us = us;
    }
    SocketioService.prototype.connect = function () {
        var _this = this;
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__(this.us.url);
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            // The observer object must have two functions: next and error.
            // the first is invoked by our observable when new data is available. The
            // second is invoked if an error occurred
            _this.socket.on('broadcast', function (m) {
                // console.log('Socket.io message received: ' + JSON.stringify(m) );
                observer.next(m);
            });
            _this.socket.on('error', function (err) {
                console.log('Socket.io error: ' + err);
                observer.error(err);
            });
            // When the consumer unsubscribes, clean up data ready for next subscription.
            return { unsubscribe: function () {
                    this.socket.disconnect();
                } };
        });
    };
    SocketioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], SocketioService);
    return SocketioService;
}());



/***/ }),

/***/ "./src/app/user-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode__ = __webpack_require__("./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_ErrorObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ErrorObservable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import jwtdecode = require('jwt-decode');


var UserHttpService = /** @class */ (function () {
    function UserHttpService(http) {
        this.http = http;
        this.users = [];
        this.token = '';
        this.url = 'http://10.0.2.2:8080';
        console.log('User service instantiated');
    }
    UserHttpService.prototype.login = function (mail, password, remember) {
        var _this = this;
        // console.log('Login: ' + mail + ' ' + password );
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                authorization: 'Basic ' + btoa(mail + ':' + password),
                'cache-control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        };
        return this.http.get(this.url + '/login', options).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (data) {
            console.log(JSON.stringify(data));
            _this.token = data.token;
            if (remember) {
                localStorage.setItem('postmessages_token', _this.token);
            }
        }));
    };
    UserHttpService.prototype.renew = function () {
        var _this = this;
        var tk = localStorage.getItem('postmessages_token');
        if (!tk || tk.length < 1) {
            return new __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */]({ error: { errormessage: 'No token found in local storage' } });
        }
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                Authorization: 'Bearer ' + tk,
                'cache-control': 'no-cache',
                'Content-Type': 'application/json',
            })
        };
        console.log('Renewing token');
        return this.http.get(this.url + '/renew', options).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (data) {
            console.log(JSON.stringify(data));
            _this.token = data.token;
            localStorage.setItem('postmessages_token', _this.token);
        }));
    };
    UserHttpService.prototype.logout = function () {
        console.log('Logging out');
        this.token = '';
        localStorage.setItem('postmessages_token', this.token);
    };
    UserHttpService.prototype.register = function (user) {
        var _this = this;
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'cache-control': 'no-cache',
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.url + '/users', user, options).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (data) {
            _this.token = data.token;
        }));
    };
    UserHttpService.prototype.get_userlist = function () {
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                Authorization: 'Bearer ' + this.get_token(),
                'cache-control': 'no-cache',
                'Content-Type': 'application/json',
            })
        };
        return this.http.get(this.url + '/users', options).pipe();
    };
    UserHttpService.prototype.delete_user = function (id) {
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                Authorization: 'Bearer ' + this.get_token(),
                'cache-control': 'no-cache',
                'Content-Type': 'application/json',
            })
        };
        return this.http.delete(this.url + '/users/' + id, options).pipe();
    };
    UserHttpService.prototype.get_token = function () {
        return this.token;
    };
    UserHttpService.prototype.get_username = function () {
        return __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(this.token).username;
    };
    UserHttpService.prototype.get_mail = function () {
        return __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(this.token).mail;
    };
    UserHttpService.prototype.get_id = function () {
        return __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(this.token).id;
    };
    UserHttpService.prototype.is_admin = function () {
        var roles = __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(this.token).roles;
        for (var idx = 0; idx < roles.length; ++idx) {
            if (roles[idx] === 'ADMIN') {
                return true;
            }
        }
        return false;
    };
    UserHttpService.prototype.is_player = function () {
        var roles = __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(this.token).roles;
        for (var idx = 0; idx < roles.length; ++idx) {
            if (roles[idx] === 'PLAYER') {
                return true;
            }
        }
        return false;
    };
    UserHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserHttpService);
    return UserHttpService;
}());



/***/ }),

/***/ "./src/app/user-list/user-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>  \r\n    <ul>  \r\n     <li><a routerLink=\"/menu\">Torna al menu</a></li>\r\n    </ul>  \r\n   </nav>\r\n\r\n   <table>\r\n     \r\n\r\n<div *ngFor=\"let user of users\" class=\"card\" style=\"margin: 5px\" > \r\n    <div >\r\n        <h5 >&nbsp;{{user.username}}</h5>    \r\n        <div *ngIf=\"us.is_admin()\" class=\"btn-delete\" >\r\n        <button class=\"btn-delete\" (click)=\"delete_user(user._id)\">Delete</button>  \r\n      </div>  \r\n        <h6 >{{user.mail}}</h6>\r\n        <h6>Vittorie : {{user.won}}, Sconfitte :{{user.lost}} , Giocate :{{user.played}} </h6>\r\n           </div>\r\n</div>\r\n\r\n<ul class=\"nav justify-content-end bottomfooter\">\r\n    <li class=\"nav-item\">\r\n      <div class=\"btn-group dropup\">\r\n        <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          {{us.get_username()}}\r\n        </button>\r\n        <div class=\"dropdown-menu\">\r\n          <div class=\"dropdown-item\" >{{us.get_mail()}}</div>\r\n          <div *ngIf=\"us.is_admin()\" class=\"dropdown-item\" href=\"#\"><i class=\"fas fa-check\"></i> Admin role</div>\r\n          <div *ngIf=\"us.is_player()\" class=\"dropdown-item\" href=\"#\"><i class=\"fas fa-check\"></i> Palyer role</div>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item nav-link\" (click)=\"logout()\" >Logout</a>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>"

/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__socketio_service__ = __webpack_require__("./src/app/socketio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserListComponent = /** @class */ (function () {
    function UserListComponent(sio, us, router) {
        this.sio = sio;
        this.us = us;
        this.router = router;
        this.users = [];
        this.errmessage = undefined;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.get_users();
        this.sio.connect().subscribe(function (m) {
            _this.get_users();
        });
    };
    UserListComponent.prototype.get_users = function () {
        var _this = this;
        this.us.get_userlist().subscribe(function (users) {
            _this.users = users;
        }, function (err) {
            // Try to renew the token
            _this.us.renew().subscribe(function () {
                // Succeeded
                _this.get_users();
            }, function (err2) {
                // Error again, we really need to logout
                _this.logout();
            });
        });
    };
    UserListComponent.prototype.delete_user = function (id) {
        var _this = this;
        this.us.delete_user(id).subscribe(function (d) {
            //console.log('utente cancellato: ' + JSON.stringify(d) );
            _this.errmessage = undefined;
            _this.router.navigate(['/menu']);
        }, function (err) {
            // console.log('errore cancellazione: ' + JSON.stringify(err.error.errormessage) );
            _this.errmessage = err.error.errormessage;
        });
    };
    UserListComponent.prototype.logout = function () {
        this.us.logout();
        this.router.navigate(['/']);
    };
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-list',
            template: __webpack_require__("./src/app/user-list/user-list.component.html"),
            styles: [__webpack_require__("./src/app/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__socketio_service__["a" /* SocketioService */], __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/user-login/user-login.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.loginlogo {\r\n    width: 80px;\r\n    height: 80px;\r\n}"

/***/ }),

/***/ "./src/app/user-login/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"width: 400px; margin-top: 20px;\" >\r\n  <div class=\"form-signin text-center loginform \">\r\n    <i class=\"fas fa-envelope loginlogo\"></i>\r\n\r\n    <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\r\n\r\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n    <input type=\"email\" #mailtxt id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\r\n    \r\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n    <input type=\"password\" #passwdtxt id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\r\n    \r\n\r\n    <div class=\"checkbox mb-3\">\r\n      <label>\r\n        <input type=\"checkbox\" #checkr value=\"remember-me\"> Remember me\r\n      </label>\r\n    </div>\r\n    \r\n    <div *ngIf=\"errmessage\" class=\"alert alert-danger\" role=\"alert\">\r\n      Login error: {{errmessage}}\r\n    </div>\r\n    \r\n    <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"login( mailtxt.value, passwdtxt.value, checkr.checked );\" >Sign in</button>\r\n    <p><a routerLink=\"/signup\">Sign-up new user</a></p>\r\n    \r\n    <p class=\"mt-5 mb-3 text-muted\">&copy; 2017-2018</p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user-login/user-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(us, router) {
        this.us = us;
        this.router = router;
        this.errmessage = undefined;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.us.renew().subscribe(function (d) {
            console.log('Renew succeded: ' + JSON.stringify(d));
            _this.router.navigate(['/menu']);
        }, function (err) {
            console.log('Renew error: ' + JSON.stringify(err.error.errormessage));
        });
    };
    UserLoginComponent.prototype.login = function (mail, password, remember) {
        var _this = this;
        this.us.login(mail, password, remember).subscribe(function (d) {
            console.log('Login granted: ' + JSON.stringify(d));
            console.log('User service token: ' + _this.us.get_token());
            _this.errmessage = undefined;
            _this.router.navigate(['/menu']);
        }, function (err) {
            console.log('Login error: ' + JSON.stringify(err.error.errormessage));
            _this.errmessage = err.error.errormessage;
        });
    };
    UserLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-login',
            template: __webpack_require__("./src/app/user-login/user-login.component.html"),
            styles: [__webpack_require__("./src/app/user-login/user-login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/user-signup/user-signup.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.loginlogo {\r\n    width: 80px;\r\n    height: 80px;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n\r\n.ng-invalid:not(form)  {\r\nborder-left: 5px solid #a94442; /* red */\r\n}"

/***/ }),

/***/ "./src/app/user-signup/user-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"width: 400px; margin-top: 20px;\" >\r\n\r\n<form class=\"form-signin\"  >\r\n  \r\n  <div class=\"text-center\">  \r\n    <i class=\"fas fa-envelope loginlogo\"></i>\r\n    <h1 class=\"h3 mb-3 font-weight-normal\">Sign-up</h1>\r\n  </div>\r\n\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"inputEmail\">Email address</label>\r\n    <input type=\"email\" #mail=\"ngModel\" name=\"mail\" [(ngModel)]=\"user.mail\" pattern=\"[^@\\s]+@[^@\\s]+\\.[^@\\s]+\" class=\"form-control\" required id=\"inputEmail\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\r\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n  </div>\r\n\r\n  <div [hidden]=\"mail.valid || mail.pristine\"\r\n      class=\"alert alert-danger\">\r\n    Mail is not valid\r\n  </div>\r\n  \r\n  <div class=\"form-group\">\r\n    <label for=\"inputUsername\">Username</label>\r\n    <input type=\"text\" #username=\"ngModel\" required name=\"username\" [(ngModel)]=\"user.username\" class=\"form-control\" id=\"inputUsername\" placeholder=\"Enter username\">\r\n  </div>\r\n\r\n  <div [hidden]=\"username.valid || username.pristine\"\r\n      class=\"alert alert-danger\">\r\n    Username is required\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"inputPassword\">Password</label>\r\n    <input type=\"password\" #password=\"ngModel\" required name=\"password\" [(ngModel)]=\"user.password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">\r\n  </div>\r\n\r\n  <div [hidden]=\"password.valid || password.pristine\"\r\n      class=\"alert alert-danger\">\r\n    Password is required\r\n  </div>\r\n  \r\n  <div>\r\n    <span>Seleziona ruolo</span>\r\n    <select #roles=\"ngModel\" equired name=\"roles\" [(ngModel)]=\"user.roles\" > \r\n      <option value=\"ADMIN\">Amministratore</option>\r\n\t    <option value=\"PLAYER\">Giocatore</option>\r\n    </select>\r\n  </div>\r\n\r\n  <div *ngIf=\"errmessage\" class=\"alert alert-danger\" role=\"alert\">\r\n    Login error: {{errmessage}}\r\n  </div>\r\n\r\n  <button class=\"btn btn-lg btn-primary btn-block\" [disabled]=\" !mail.valid || !password.valid || !username.valid\" (click)=\"signup();\" >Sign up</button>\r\n</form>\r\n</div>"

/***/ }),

/***/ "./src/app/user-signup/user-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserSignupComponent = /** @class */ (function () {
    function UserSignupComponent(us, router) {
        this.us = us;
        this.router = router;
        this.ruoli = ["PLAYER", "ADMIN"];
        this.errmessage = undefined;
        this.user = { mail: '', password: '', username: '', roles: [], won: 0, lost: 0, played: 0 };
    }
    UserSignupComponent.prototype.ngOnInit = function () {
    };
    UserSignupComponent.prototype.signup = function () {
        var _this = this;
        this.us.register(this.user).subscribe(function (d) {
            console.log('Registration ok: ' + JSON.stringify(d));
            _this.errmessage = undefined;
            _this.router.navigate(['/login']);
        }, function (err) {
            console.log('Signup error: ' + JSON.stringify(err.error.errormessage));
            _this.errmessage = err.error.errormessage || err.error.message;
        });
    };
    UserSignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-signup',
            template: __webpack_require__("./src/app/user-signup/user-signup.component.html"),
            styles: [__webpack_require__("./src/app/user-signup/user-signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], UserSignupComponent);
    return UserSignupComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jwt_decode__ = __webpack_require__("./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import jwtdecode = require('jwt-decode');


var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [];
        this.token = '';
        this.url = '';
    }
    UserService.prototype.login = function (mail, password, remember) {
        // console.log('Login: ' + mail + ' ' + password );
        // tslint:disable-next-line:max-line-length
        this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZXMiOlsiQURNSU4iLCJNT0RFUkFUT1IiXSwibWFpbCI6ImFkbWluQHBvc3RtZXNzYWdlcy5pdCIsImlkIjoiNWFjNGRkYzcxMWUwMzYwYmEyZGYzZjQ4IiwiaWF0IjoxNTIyODU2MjU3LCJleHAiOjE1MjI4NTk4NTd9.3p6TmJAMqL19h4-b_r2pBdyerdbHh_l3zA87ZTfqeYk';
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])({});
    };
    UserService.prototype.renew = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])({});
    };
    UserService.prototype.register = function (user) {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])({});
    };
    UserService.prototype.get_userlist = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(this.users);
    };
    UserService.prototype.delete_user = function (id) {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])({});
    };
    UserService.prototype.logout = function () {
        this.token = '';
    };
    UserService.prototype.get_token = function () {
        return this.token;
    };
    UserService.prototype.get_username = function () {
        return __WEBPACK_IMPORTED_MODULE_1_jwt_decode__(this.token).username;
    };
    UserService.prototype.get_mail = function () {
        return __WEBPACK_IMPORTED_MODULE_1_jwt_decode__(this.token).mail;
    };
    UserService.prototype.get_id = function () {
        return __WEBPACK_IMPORTED_MODULE_1_jwt_decode__(this.token).id;
    };
    UserService.prototype.is_admin = function () {
        var roles = __WEBPACK_IMPORTED_MODULE_1_jwt_decode__(this.token).roles;
        for (var idx = 0; idx < roles.length; ++idx) {
            if (roles[idx] === 'ADMIN') {
                return true;
            }
        }
        return false;
    };
    UserService.prototype.is_player = function () {
        var roles = __WEBPACK_IMPORTED_MODULE_1_jwt_decode__(this.token).roles;
        for (var idx = 0; idx < roles.length; ++idx) {
            if (roles[idx] === 'PLAYER') {
                return true;
            }
        }
        return false;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
document.addEventListener('deviceready', function () {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]).catch(function (err) {
        return console.log(err);
    });
}, false);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map