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
var Observable_1 = require("rxjs/Observable");
require('rxjs/add/observable/of');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var http_1 = require("@angular/http");
var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.tasks = [];
    }
    AppService.prototype.add = function (task) {
        /*if (this.tasks.indexOf(task) == -1) {
             this.tasks.push(task);
         }*/
        this.postData(task).subscribe(function (data) {
            // alert(JSON.stringify(data));
            // this.tasks=data;
            // data.map((el:any)=>this.service.tasks.push(new Task(JSON.parse(el))))
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Completed.");
        });
    };
    AppService.prototype.delete = function (index) {
        // this.tasks.splice(+index, 1);
        this.deleteData(index).subscribe(function (data) {
            // alert(JSON.stringify(data));
            // this.tasks=data;
            // data.map((el:any)=>this.service.tasks.push(new Task(JSON.parse(el))))
        }, function (err) {
            console.log("Error occured while deleting");
        }, function () {
            console.log("Completed.");
        });
    };
    AppService.prototype.update = function (task) {
        // if (this.tastks.indexOf(task) == -1) {
        //     this.tasks[index] = task;
        // }
        /**
         * this.tasks.map(task=> {
            if(task._id == id) return task; else return new Task("","","","","");
        })
         */
        this.updateData(task).subscribe(function (data) {
            // alert(JSON.stringify(data));
            // this.tasks=data;
            // data.map((el:any)=>this.service.tasks.push(new Task(JSON.parse(el))))
        }, function (err) {
            console.error(err);
        }, function () {
            console.log("Completed.");
        });
    };
    /*
        getDataWithObservable():Observable<any>{
            return Observable.of<any>(this.tasks);
          // return Observable.throw<any>(new Error("error"));
    
        }
    
        getDataWithPromise(){
            return Promise.resolve<any>(this.tasks);
            // return Promise.reject<any>(new Error("error"));
        }*/
    AppService.prototype.getData = function () {
        var _this = this;
        //First we define header before every http call.
        var jsonHeaders = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.get('http://localhost:9000/get/all', { headers: jsonHeaders })
            .map(function (response) {
            return _this.extractData(response);
        });
    };
    AppService.prototype.deleteData = function (id) {
        var _this = this;
        //First we define header before every http call.
        var jsonHeaders = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.get('http://localhost:9000/remove/' + id, { headers: jsonHeaders })
            .map(function (response) {
            return _this.extractData(response);
        });
    };
    AppService.prototype.postData = function (task) {
        var _this = this;
        //First we define header before every http call.
        var jsonHeaders = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var obj = {
            date: task.date,
            title: task.title,
            description: task.description,
            priority: task.priority
        };
        return this.http.post('http://localhost:9000/add', obj, { headers: jsonHeaders })
            .map(function (response) {
            return _this.extractData(response);
        }).catch(function (e) {
            console.log("Something went wrong with post.");
            return Observable_1.Observable.throw(new Error("error"));
        });
    };
    AppService.prototype.updateData = function (task) {
        var _this = this;
        //First we define header before every http call.
        var jsonHeaders = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var obj = {
            _id: task._id,
            date: task.date,
            title: task.title,
            description: task.description,
            priority: task.priority
        };
        return this.http.post('http://localhost:9000/update', obj, { headers: jsonHeaders })
            .map(function (response) {
            return _this.extractData(response);
        }).catch(function (e) {
            console.log("Something went wrong with post.");
            return Observable_1.Observable.throw(new Error("error"));
        });
    };
    AppService.prototype.extractData = function (res) {
        var errMsg;
        var body = res.json();
        return body;
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map