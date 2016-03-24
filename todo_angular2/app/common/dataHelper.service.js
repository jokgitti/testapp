"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var STATUS_OK = "OK";
var STATUS_KO = "KO";
var DataHelperService = (function () {
    function DataHelperService() {
    }
    DataHelperService.prototype.validateGenericResponse = function (response) {
        return response.statusCode === STATUS_OK;
    };
    DataHelperService = __decorate([
        core_1.Injectable()
    ], DataHelperService);
    return DataHelperService;
}());
exports.DataHelperService = DataHelperService;
//# sourceMappingURL=dataHelper.service.js.map