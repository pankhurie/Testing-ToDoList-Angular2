"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var platform_browser_2 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var show_component_1 = require("./show.component");
var testing_2 = require("@angular/router/testing");
var app_service_1 = require("../app.service");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
describe('ShowComponent should', function () {
    var de;
    var comp;
    var fixture;
    var service;
    var router;
    var MockRouter = (function () {
        function MockRouter() {
        }
        MockRouter.prototype.navigate = function () {
            return Promise.resolve(true);
        };
        return MockRouter;
    }());
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [show_component_1.ShowComponent],
            providers: [{ provide: router_1.Router, useClass: MockRouter }, router_1.RouterOutletMap, app_service_1.AppService],
            imports: [testing_2.RouterTestingModule, platform_browser_2.BrowserModule, forms_1.FormsModule, common_1.CommonModule, http_1.HttpModule],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(show_component_1.ShowComponent);
        comp = fixture.componentInstance;
        comp.tasks = [{
                date: '01/03/2017',
                title: 'Assignment 1',
                description: 'To be submitted on or before March 1',
                priority: 'high',
                _id: '12345'
            }];
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        service = fixture.debugElement.injector.get(app_service_1.AppService);
        router = fixture.debugElement.injector.get(router_1.Router);
    });
    it('should create component show', function () { return expect(comp).toBeDefined(); });
    it('should refresh the page on initial loading', function () {
        spyOn(comp, 'refresh');
        comp.ngOnInit();
        expect(comp.refresh).toHaveBeenCalled();
    });
    it('it should be able to get data from service when refresh is called', function () {
        spyOn(service, 'getData').and.returnValue(Observable_1.Observable.of([{
                date: '18/03/1992',
                title: 'Pankhurie Birthday',
                description: 'Today is Pankhurie birthday!!',
                priority: 'high',
                _id: '12346'
            }]));
        comp.refresh();
        expect(comp.tasks).toEqual([{
                date: '18/03/1992',
                title: 'Pankhurie Birthday',
                description: 'Today is Pankhurie birthday!!',
                priority: 'high',
                _id: '12346'
            }]);
    });
    it('should generate error in case of error when getting data on refreshing of page', function () {
        spyOn(console, 'error');
        spyOn(service, 'getData').and.returnValue(Observable_1.Observable.throw(Error('Error Occured')));
        comp.refresh();
        expect(console.error).toHaveBeenCalledWith(Error('Error Occured'));
    });
    it('should be able to delete data from service', function () {
        spyOn(window, "alert");
        spyOn(comp, "refresh");
        spyOn(service, 'delete').and.returnValue(Observable_1.Observable.of([{
                date: '',
                title: '',
                description: '',
                priority: '',
                _id: ''
            }]));
        comp.done(0);
        expect(comp.refresh).toHaveBeenCalled();
        router.navigate([]).then(function (data) {
            expect(data).toBe(true);
        });
    });
    it('should navigate when edit is called', function () {
        comp.edit(0);
        router.navigate([]).then(function (data) {
            expect(data).toBe(true);
        });
    });
});
//# sourceMappingURL=show.component.spec.js.map