"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ShowComponent = (function () {
    function ShowComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    ShowComponent.prototype.ngOnInit = function () {
        this.tasks = this.service.tasks;
        /**
         * Observable
         */
        this.service.getData().subscribe(function (data1) {
            alert(JSON.stringify(data1));
        }, function (err) {
            alert("Something bad happened.");
        }, function () {
            alert("Completed.");
        });
        /**
         * Promise
         */
        /*this.service.getDataWithPromise().then((data1:any) =>{
            alert("Success");
        }, (err:any)=>{
            alert("Something bad happened.")
        });*/
    };
    ShowComponent.prototype.edit = function (i) {
        // alert("Attempt to edit index: "+i)
        // let index = this.service.tasks.indexOf(this.tasks[i]);
        this.router.navigate(['edit', i]);
    };
    ShowComponent.prototype.done = function (i) {
        // alert("Attempt to delete index: "+i)
        // this.service.tasks.splice(i, 1);
        this.service.delete(i);
    };
    ShowComponent = __decorate([
        core_1.Component({
            selector: 'show',
            templateUrl: './app/show/show.component.html',
            styleUrls: ['']
        })
    ], ShowComponent);
    return ShowComponent;
}());
exports.ShowComponent = ShowComponent;
