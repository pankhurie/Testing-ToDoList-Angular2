import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common'
import {AppComponent}  from './app.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {AppService} from "./app.service";
import {HttpModule} from '@angular/http';
import {CreateComponent} from "./create/create.component";
import {ShowComponent} from "./show/show.component";

@NgModule({
    imports: [BrowserModule, FormsModule, CommonModule, RouterModule.forRoot(routes), HttpModule],
    declarations: [AppComponent, CreateComponent, ShowComponent],
    bootstrap: [AppComponent],
    providers: [AppService]
})
export class AppModule {
}
