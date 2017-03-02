
import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {RouterModule, Router, RouterOutletMap, ActivatedRoute} from '@angular/router';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CommonModule, LocationStrategy} from '@angular/common'
import {routes} from "../app.routes";
import {HttpModule} from '@angular/http';
import {ShowComponent} from "./show.component";
import {RouterTestingModule} from "@angular/router/testing";
import {AppService} from "../app.service";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";

describe('ShowComponent should', function () {
    let de: DebugElement;
    let comp: ShowComponent;
    let fixture: ComponentFixture<ShowComponent>;
    let service: AppService;
    let router: Router;

    class MockRouter {
        navigate():Promise<boolean>{
            return Promise.resolve(true)
        }
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({

            declarations: [ ShowComponent],
            providers: [{provide: Router, useClass: MockRouter}, RouterOutletMap, AppService ],
            imports: [RouterTestingModule,BrowserModule, FormsModule, CommonModule, HttpModule],

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShowComponent);
        comp = fixture.componentInstance;
        comp.tasks = [{
            date: '01/03/2017',
            title: 'Assignment 1',
            description: 'To be submitted on or before March 1',
            priority: 'high',
            _id: '12345'
        }]
        de = fixture.debugElement.query(By.css('h1'));
        service = fixture.debugElement.injector.get(AppService);
        router = fixture.debugElement.injector.get(Router);
    });

    it('should create component show', () => expect(comp).toBeDefined() );

    it('should refresh the page on initial loading', () => {
        spyOn(comp, 'refresh');
        comp.ngOnInit();
        expect(comp.refresh).toHaveBeenCalled();
    });

    it('it should be able to get data from service when refresh is called', () => {
        spyOn(service, 'getData').and.returnValue(
            Observable.of<any>(
                [{
                    date: '18/03/1992',
                    title: 'Pankhurie Birthday',
                    description: 'Today is Pankhurie birthday!!',
                    priority: 'high',
                    _id: '12346'
                }]
            )
        );
        comp.refresh();
        expect(comp.tasks).toEqual([{
            date: '18/03/1992',
            title: 'Pankhurie Birthday',
            description: 'Today is Pankhurie birthday!!',
            priority: 'high',
            _id: '12346'
        }])
    });

    it('should generate error in case of error when getting data on refreshing of page', () => {
        spyOn(console, 'error');
        spyOn(service, 'getData').and.returnValue(
            Observable.throw(Error('Error Occured'))
        );
        comp.refresh();
        expect(console.error).toHaveBeenCalledWith(Error('Error Occured'));
    });

   it('should be able to delete data from service',() =>{
       spyOn(window, "alert");
       spyOn(comp, "refresh");
       spyOn(service,'delete').and.returnValue(
            Observable.of<any>(
                [{
                    date: '',
                    title: '',
                    description: '',
                    priority: '',
                    _id: ''
                }]
            )
        );

        comp.done(0);
        expect(comp.refresh).toHaveBeenCalled();
       router.navigate([]).then(data => {
           expect(data).toBe(true);
       })
    });

    it('should navigate when edit is called', () => {
        comp.edit(0);
        router.navigate([]).then(data => {
            expect(data).toBe(true);
        })

    });





});