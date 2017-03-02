"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_service_1 = require("../app.service");
var LoginComponent = (function () {
    function LoginComponent(router, route, service) {
        this.router = router;
        this.route = route;
        this.service = service;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            _this.index = +data.id;
            if (_this.index) {
                _this.intern = _this.service.interns.filter(function (intern) { return intern.id === _this.index; })[0];
                alert(JSON.stringify(_this.intern));
            }
        });
    };
    LoginComponent.prototype.goToHome = function () {
        this.router.navigate(['home']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './app/login/login.component.html',
            styleUrls: ['']
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, app_service_1.AppService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map