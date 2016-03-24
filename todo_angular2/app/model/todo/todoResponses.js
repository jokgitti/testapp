"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var genericResponse_1 = require("../common/genericResponse");
var GetTodoResponse = (function (_super) {
    __extends(GetTodoResponse, _super);
    function GetTodoResponse() {
        _super.apply(this, arguments);
    }
    return GetTodoResponse;
}(genericResponse_1.GenericResponse));
exports.GetTodoResponse = GetTodoResponse;
var GetTodosResponse = (function (_super) {
    __extends(GetTodosResponse, _super);
    function GetTodosResponse() {
        _super.apply(this, arguments);
    }
    return GetTodosResponse;
}(genericResponse_1.GenericResponse));
exports.GetTodosResponse = GetTodosResponse;
var CreateTodoResponse = (function (_super) {
    __extends(CreateTodoResponse, _super);
    function CreateTodoResponse() {
        _super.apply(this, arguments);
    }
    return CreateTodoResponse;
}(genericResponse_1.GenericResponse));
exports.CreateTodoResponse = CreateTodoResponse;
//# sourceMappingURL=todoResponses.js.map