System.register(["angular2/core", "./todo.service", "../common/dataHelper.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_service_1, dataHelper_service_1;
    var TodoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (dataHelper_service_1_1) {
                dataHelper_service_1 = dataHelper_service_1_1;
            }],
        execute: function() {
            TodoComponent = (function () {
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
                        templateUrl: "app/todo/todo.template.html",
                        providers: [todo_service_1.TodoService]
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService, dataHelper_service_1.DataHelperService])
                ], TodoComponent);
                return TodoComponent;
            }());
            exports_1("TodoComponent", TodoComponent);
        }
    }
});
//# sourceMappingURL=todo.component.js.map