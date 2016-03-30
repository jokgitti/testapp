System.register(["angular2/core", "./todo.service", "../common/dataHelper.service", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, todo_service_1, dataHelper_service_1, router_1;
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
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            TodoComponent = (function () {
                function TodoComponent(_router, _service, _dataHelper) {
                    this._router = _router;
                    this._service = _service;
                    this._dataHelper = _dataHelper;
                }
                TodoComponent.prototype.ngOnInit = function () {
                    this.getTodos();
                };
                TodoComponent.prototype.getTodos = function () {
                    var _this = this;
                    this._service.getAllTodos()
                        .subscribe(function (response) {
                        _this._dataHelper.validateGenericResponse(response);
                        _this.todos = response.todos;
                        _this.pendingTodos = response.todos.filter(function (todo) { return !todo.done; });
                        _this.doneTodos = response.todos.filter(function (todo) { return todo.done; });
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
                TodoComponent.prototype.todoDetails = function (todo) {
                    var link = ["TodoDetails", { id: todo.id }];
                    this._router.navigate(link);
                };
                TodoComponent = __decorate([
                    core_1.Component({
                        selector: "todo",
                        templateUrl: "app/todo/todo.template.html",
                        providers: [todo_service_1.TodoService, dataHelper_service_1.DataHelperService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, todo_service_1.TodoService, dataHelper_service_1.DataHelperService])
                ], TodoComponent);
                return TodoComponent;
            }());
            exports_1("TodoComponent", TodoComponent);
        }
    }
});
//# sourceMappingURL=todo.component.js.map