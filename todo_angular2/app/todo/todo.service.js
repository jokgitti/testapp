"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var config_1 = require("../common/config");
var todoBaseUrl = config_1.CONFIG.baseUrls.todo;
var TodoService = (function () {
    function TodoService(_http) {
        this._http = _http;
    }
    TodoService.prototype.getAllTodos = function () {
        return this._http.get("" + todoBaseUrl)
            .map(function (response) { return response.json().data; });
    };
    TodoService.prototype.getTodoById = function (todoId) {
        return this._http.get(todoBaseUrl + "/" + todoId.toString())
            .map(function (response) { return response.json().data; });
    };
    TodoService.prototype.saveTodo = function (description) {
        return this._http.post("" + todoBaseUrl, description)
            .map(function (response) { return response.json().data; });
    };
    TodoService.prototype.markTodoAsDone = function (todoId) {
        return this._http.put(todoBaseUrl + "/" + todoId.toString(), undefined)
            .map(function (response) { return response.json().data; });
    };
    TodoService.prototype.deleteTodo = function (todoId) {
        return this._http.delete(todoBaseUrl + "/" + todoId.toString())
            .map(function (response) { return response.json().data; });
    };
    TodoService = __decorate([
        core_1.Injectable()
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map