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
var task_1 = require('../task');
var app_service_1 = require("../app.service");
var CreateComponent = (function () {
    function CreateComponent(router, route, service) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.task = new task_1.Task("", "", "", "");
        this.tasks = [];
    }
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            _this.index = data.i;
            if (_this.index) {
                _this.service.getData().subscribe(function (data) {
                    _this.tasks = data;
                    _this.task = _this.tasks.filter(function (x) { return x._id == _this.index; })[0];
                }, function (err) {
                    console.error(err);
                }, function () {
                    console.log("Completed.");
                });
            }
        });
    };
    CreateComponent.prototype.submit = function () {
        if (this.index) {
            // this.service.tasks[this.index]=this.task;
            // this.service.update(this.index, this.task);
            this.service.update(this.task);
        }
        else {
            // this.service.tasks.push(this.task);
            this.service.add(this.task);
        }
        this.router.navigate(['show']);
        // alert(JSON.stringify(this.task));
    };
    CreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'create',
            templateUrl: './create.component.html',
            styleUrls: ['']
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, app_service_1.AppService])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map