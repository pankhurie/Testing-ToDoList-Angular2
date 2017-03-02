/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { AppComponent } from './app.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {RouterModule, Router, RouterOutletMap, ActivatedRoute} from '@angular/router';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CommonModule, LocationStrategy} from '@angular/common'
import {routes} from "./app.routes";
import {AppService} from "./app.service";
import {HttpModule} from '@angular/http';
import {CreateComponent} from "./create/create.component";
import {ShowComponent} from "./show/show.component";
import {RouterTestingModule} from "@angular/router/testing";

describe('AppComponent should', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [ AppComponent, CreateComponent, ShowComponent ],
      providers: [RouterOutletMap, AppService],
      imports: [RouterTestingModule,BrowserModule, FormsModule, CommonModule, HttpModule],

    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component app', () => expect(comp).toBeDefined() );

});