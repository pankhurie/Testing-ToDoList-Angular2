
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {RouterOutletMap, Router, ActivatedRoute} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common'
import {HttpModule} from '@angular/http';
import {CreateComponent} from "./create.component";
import {RouterTestingModule} from "@angular/router/testing";
import {AppService} from "../app.service";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";

describe('CreateComponent should', function () {
    let de: DebugElement;
    let comp: CreateComponent;
    let fixture: ComponentFixture<CreateComponent>;
    let service: AppService;
    let router: Router;
    let route:ActivatedRoute;
    let mockRoute:MockActivatedRoute;

    class MockRouter {
        navigate():Promise<boolean>{
            return Promise.resolve(true)
        }
    }
    class MockActivatedRoute {
        params = Observable.of<any>({'edit':'1'})
        /*get parameters(){
            return { params: this.params };
        }*/
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({

            declarations: [ CreateComponent],
            providers: [{provide: Router, useClass: MockRouter},
                {provide: ActivatedRoute, useClass: MockActivatedRoute}, AppService ],
            imports: [RouterTestingModule,BrowserModule, FormsModule, CommonModule, HttpModule],

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateComponent);
        comp = fixture.componentInstance;
        comp.task = {
            date: '18/03/1992',
            title: 'My Birthday',
            description: 'And its a weekend!!',
            priority: 'high',
            _id: '12345'
        }

        de = fixture.debugElement.query(By.css('h1'));
        service = fixture.debugElement.injector.get(AppService);
        router = fixture.debugElement.injector.get(Router);
        route=fixture.debugElement.injector.get(ActivatedRoute);
    });

    it('should create component create', () => expect(comp).toBeDefined() );

    it('should be able to update data in case of getting router parameter', () => {
        comp.index = '12345';
        spyOn(service, 'update');
        comp.submit();
        expect(service.update).toHaveBeenCalled();

    });

    it('should be able to add data in case no parameter', () => {
        spyOn(service, 'add');
        comp.submit();
        expect(service.add).toHaveBeenCalled();

    });

    it('should be able to get data from service when component is called with parameter', () => {
        comp.index = '12345';
        spyOn(service, 'getData').and.returnValue(
            Observable.of<any>(
                [{
                    date: '18/03/1992',
                    title: 'My Birthday',
                    description: 'And its a weekend!!',
                    priority: 'high',
                    _id: '12345'
                }]
            )
        );
        comp.ngOnInit();
        expect(comp.task).toEqual([{
            date: '18/03/1992',
            title: 'My Birthday',
            description: 'And its a weekend!!',
            priority: 'high',
            _id: '12345'
        }])
    });

    it('should generate error in case of error when getting data on refreshing of page', () => {
        comp.index = '12345';
        spyOn(console, 'error');
        spyOn(service, 'getData').and.returnValue(
            Observable.throw(Error('Error Occured'))
        );
        comp.ngOnInit();
        expect(console.error).toHaveBeenCalledWith(Error('Error Occured'));
    });




});