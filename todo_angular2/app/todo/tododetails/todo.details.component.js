System.register(["angular2/core", "angular2/router", "../../common/dataHelper.service", "../todo.service"], function(exports_1, context_1) {
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
    var core_1, router_1, dataHelper_service_1, todo_service_1;
    var TodoDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dataHelper_service_1_1) {
                dataHelper_service_1 = dataHelper_service_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            TodoDetailsComponent = (function () {
                function TodoDetailsComponent(_routeParams, _service, _dataHelper) {
                    this._routeParams = _routeParams;
                    this._service = _service;
                    this._dataHelper = _dataHelper;
                }
                TodoDetailsComponent.prototype.ngOnInit = function () {
                    var todoId = this._routeParams.get("id");
                    this.getTodo(Number(todoId));
                };
                TodoDetailsComponent.prototype.getTodo = function (todoId) {
                    var _this = this;
                    this._service.getTodoById(todoId)
                        .subscribe(function (response) {
                        _this._dataHelper.validateGenericResponse(response);
                        _this.todo = response.todo;
                    });
                };
                TodoDetailsComponent = __decorate([
                    core_1.Component({
                        selector: "todo-details",
                        templateUrl: "app/todo/tododetails/todo.details.template.html",
                        providers: [todo_service_1.TodoService, dataHelper_service_1.DataHelperService]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, todo_service_1.TodoService, dataHelper_service_1.DataHelperService])
                ], TodoDetailsComponent);
                return TodoDetailsComponent;
            }());
            exports_1("TodoDetailsComponent", TodoDetailsComponent);
        }
    }
});
//# sourceMappingURL=todo.details.component.js.map