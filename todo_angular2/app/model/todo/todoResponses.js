System.register(["../common/genericResponse"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var genericResponse_1;
    var GetTodoResponse, GetTodosResponse, CreateTodoResponse;
    return {
        setters:[
            function (genericResponse_1_1) {
                genericResponse_1 = genericResponse_1_1;
            }],
        execute: function() {
            GetTodoResponse = (function (_super) {
                __extends(GetTodoResponse, _super);
                function GetTodoResponse() {
                    _super.apply(this, arguments);
                }
                return GetTodoResponse;
            }(genericResponse_1.GenericResponse));
            exports_1("GetTodoResponse", GetTodoResponse);
            GetTodosResponse = (function (_super) {
                __extends(GetTodosResponse, _super);
                function GetTodosResponse() {
                    _super.apply(this, arguments);
                }
                return GetTodosResponse;
            }(genericResponse_1.GenericResponse));
            exports_1("GetTodosResponse", GetTodosResponse);
            CreateTodoResponse = (function (_super) {
                __extends(CreateTodoResponse, _super);
                function CreateTodoResponse() {
                    _super.apply(this, arguments);
                }
                return CreateTodoResponse;
            }(genericResponse_1.GenericResponse));
            exports_1("CreateTodoResponse", CreateTodoResponse);
        }
    }
});
//# sourceMappingURL=todoResponses.js.map