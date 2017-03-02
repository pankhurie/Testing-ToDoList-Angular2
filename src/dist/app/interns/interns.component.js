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
var InternsComponent = (function () {
    function InternsComponent() {
        this.newTodo = '';
        this.todos = [];
    }
    InternsComponent.prototype.addTodo = function (event) {
        this.todoObj = {
            newTodo: this.newTodo,
            completed: false
        };
        this.todos.push(this.todoObj);
        this.newTodo = '';
        event.preventDefault();
    };
    InternsComponent.prototype.deleteTodo = function (index) {
        this.todos.splice(index, 1);
    };
    InternsComponent.prototype.deleteSelectedTodos = function () {
        //need ES5 to reverse loop in order to splice by index
        for (var i = (this.todos.length - 1); i > -1; i--) {
            if (this.todos[i].completed) {
                this.todos.splice(i, 1);
            }
        }
    };
    InternsComponent = __decorate([
        core_1.Component({
            selector: 'todos',
            templateUrl: './app/interns/interns.component.html',
            styleUrls: ['./app/interns/interns.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], InternsComponent);
    return InternsComponent;
}());
exports.InternsComponent = InternsComponent;
//# sourceMappingURL=interns.component.js.map