"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var TodoComponent = (function () {
    function TodoComponent(_service, _dataHelper) {
        this._service = _service;
        this._dataHelper = _dataHelper;
    }
    TodoComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    TodoComponent.prototype.getTodos = function () {
        var _this = this;
        this._service.getAllTodos()
            .subscribe(function (data) {
            _this._dataHelper.validateGenericResponse(data);
            _this.todos = data.todos;
            _this.pendingTodos = data.todos.filter(function (todo) { return !todo.done; });
            _this.doneTodos = data.todos.filter(function (todo) { return todo.done; });
        });
    };
    TodoComponent.prototype.addTodo = function () {
        var _this = this;
        this._service.saveTodo(this.newTodoDescription)
            .subscribe(function (data) {
            _this._dataHelper.validateGenericResponse(data);
            _this.getTodos();
        });
    };
    TodoComponent.prototype.updateTodo = function (todoId) {
        var _this = this;
        this._service.markTodoAsDone(todoId)
            .subscribe(function (data) {
            _this._dataHelper.validateGenericResponse(data);
        });
    };
    TodoComponent.prototype.deleteTodo = function (todoId) {
        var _this = this;
        this._service.deleteTodo(todoId)
            .subscribe(function (data) {
            _this._dataHelper.validateGenericResponse(data);
        });
    };
    TodoComponent = __decorate([
        core_1.Component({
            selector: "todo",
            templateUrl: "app/todo/todo.template.html"
        })
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map