"use strict";

(function () {

    angular.module("common.router.module", ["ui.router"])
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

            // html5 mode disabled -> url with #/
            $locationProvider.html5Mode(false);

            // for unmatched url
            $urlRouterProvider.otherwise(function ($injector) {

                var $state = $injector.get("$state");
                $state.go("todo");
            });

            // url dispatcher
            $stateProvider
                .state("todo", {
                    url: "/todo",
                    templateUrl: "app/todo/todo.template.html",
                    controller: "TodoController as todoCtrl",
                    data: {
                        breadCrumbName: "Todos"
                    }
                })
                .state("todo.details", {
                    url: "/{todoId}",
                    templateUrl: "app/todo/details/todo.details.template.html",
                    controller: "TodoDetailsController as todoDetailsCtrl",
                    data: {
                        breadCrumbName: "Todo details"
                    }
                });
        });
})();