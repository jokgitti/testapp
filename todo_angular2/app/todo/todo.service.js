System.register(["angular2/core", "../common/config", "angular2/http", "../common/dataHelper.service"], function(exports_1, context_1) {
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
    var core_1, config_1, http_1, dataHelper_service_1;
    var todoBaseUrl, TodoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (dataHelper_service_1_1) {
                dataHelper_service_1 = dataHelper_service_1_1;
            }],
        execute: function() {
            todoBaseUrl = config_1.CONFIG.baseUrls.todo;
            TodoService = (function () {
                function TodoService(_http, _dataHelper) {
                    this._http = _http;
                    this._dataHelper = _dataHelper;
                }
                TodoService.prototype.getAllTodos = function () {
                    return this._http.get("" + todoBaseUrl)
                        .map(function (response) { return response.json(); })
                        .catch(this._dataHelper.handleResponseError);
                };
                TodoService.prototype.getTodoById = function (todoId) {
                    return this._http.get(todoBaseUrl + "/" + todoId.toString())
                        .map(function (response) { return response.json(); })
                        .catch(this._dataHelper.handleResponseError);
                };
                TodoService.prototype.saveTodo = function (description) {
                    return this._http.post("" + todoBaseUrl, description)
                        .map(function (response) { return response.json(); })
                        .catch(this._dataHelper.handleResponseError);
                };
                TodoService.prototype.markTodoAsDone = function (todoId) {
                    return this._http.put(todoBaseUrl + "/" + todoId.toString(), undefined)
                        .map(function (response) { return response.json(); })
                        .catch(this._dataHelper.handleResponseError);
                };
                TodoService.prototype.deleteTodo = function (todoId) {
                    return this._http.delete(todoBaseUrl + "/" + todoId.toString())
                        .map(function (response) { return response.json(); })
                        .catch(this._dataHelper.handleResponseError);
                };
                TodoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, dataHelper_service_1.DataHelperService])
                ], TodoService);
                return TodoService;
            }());
            exports_1("TodoService", TodoService);
        }
    }
});
//# sourceMappingURL=todo.service.js.map