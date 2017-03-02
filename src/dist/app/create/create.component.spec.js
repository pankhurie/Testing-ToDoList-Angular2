"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var platform_browser_2 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var create_component_1 = require("./create.component");
var testing_2 = require("@angular/router/testing");
var app_service_1 = require("../app.service");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
describe('CreateComponent should', function () {
    var de;
    var comp;
    var fixture;
    var service;
    var router;
    var route;
    var mockRoute;
    var MockRouter = (function () {
        function MockRouter() {
        }
        MockRouter.prototype.navigate = function () {
            return Promise.resolve(true);
        };
        return MockRouter;
    }());
    var MockActivatedRoute = (function () {
        function MockActivatedRoute() {
            this.params = Observable_1.Observable.of({ 'edit': '1' });
        }
        return MockActivatedRoute;
    }());
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [create_component_1.CreateComponent],
            providers: [{ provide: router_1.Router, useClass: MockRouter },
                { provide: router_1.ActivatedRoute, useClass: MockActivatedRoute }, app_service_1.AppService],
            imports: [testing_2.RouterTestingModule, platform_browser_2.BrowserModule, forms_1.FormsModule, common_1.CommonModule, http_1.HttpModule],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(create_component_1.CreateComponent);
        comp = fixture.componentInstance;
        comp.task = {
            date: '18/03/1992',
            title: 'My Birthday',
            description: 'And its a weekend!!',
            priority: 'high',
            _id: '12345'
        };
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        service = fixture.debugElement.injector.get(app_service_1.AppService);
        router = fixture.debugElement.injector.get(router_1.Router);
        route = fixture.debugElement.injector.get(router_1.ActivatedRoute);
    });
    it('should create component create', function () { return expect(comp).toBeDefined(); });
    it('should be able to update data in case of getting router parameter', function () {
        comp.index = '12345';
        spyOn(service, 'update');
        comp.submit();
        expect(service.update).toHaveBeenCalled();
    });
    it('should be able to add data in case no parameter', function () {
        spyOn(service, 'add');
        comp.submit();
        expect(service.add).toHaveBeenCalled();
    });
    it('should be able to get data from service when component is called with parameter', function () {
        comp.index = '12345';
        spyOn(service, 'getData').and.returnValue(Observable_1.Observable.of([{
                date: '18/03/1992',
                title: 'My Birthday',
                description: 'And its a weekend!!',
                priority: 'high',
                _id: '12345'
            }]));
        comp.ngOnInit();
        expect(comp.task).toEqual([{
                date: '18/03/1992',
                title: 'My Birthday',
                description: 'And its a weekend!!',
                priority: 'high',
                _id: '12345'
            }]);
    });
    it('should generate error in case of error when getting data on refreshing of page', function () {
        comp.index = '12345';
        spyOn(console, 'error');
        spyOn(service, 'getData').and.returnValue(Observable_1.Observable.throw(Error('Error Occured')));
        comp.ngOnInit();
        expect(console.error).toHaveBeenCalledWith(Error('Error Occured'));
    });
});
//# sourceMappingURL=create.component.spec.js.map