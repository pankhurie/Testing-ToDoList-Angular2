"use strict";
var create_component_1 = require("./create/create.component");
var show_component_1 = require("./show/show.component");
exports.routes = [{
        path: 'create',
        component: create_component_1.CreateComponent
    }, {
        path: 'edit/:i',
        component: create_component_1.CreateComponent
    }, {
        path: 'show',
        component: show_component_1.ShowComponent
    }, {
        path: '',
        redirectTo: '/show',
        pathMatch: 'full'
    }];
//
// export const routes:Routes = [{
//     path:'home',
//     component: HomeComponent
// },{
//     path:'login',
//     component: LoginComponent
// },{
//     path:'details/:id',
//     component: LoginComponent
// }]; 
