"use strict";

(function () {

    angular.module("sampleApp", [
        "common.router.module",
        "common.breadCrumb.module",
        "todo.module"])
        .run(function ($rootScope, $state, breadCrumbFactory) {

            $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams) {

                breadCrumbFactory.updateBreadCrumbLocation(toState);
            });
        });
})();