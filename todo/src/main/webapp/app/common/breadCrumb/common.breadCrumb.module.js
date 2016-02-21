"use strict";

(function () {

    angular.module("common.breadCrumb.module", [])
        .factory("breadCrumbFactory", function breadCrumbFactory($state) {

            var breadCrumb = [];
            var rootStateName = "todo";

            var updateBreadCrumbLocation = function () {

                var stateHierarchy = $state.current.name.split(".");
                var currentStateName = "";
                breadCrumb = [];

                for (var i = 0; i < stateHierarchy.length; i++) {

                    currentStateName += currentStateName ? "." + stateHierarchy[i] : stateHierarchy[i];
                    breadCrumb.push({
                        name: currentStateName,
                        label: serializeState($state.get(currentStateName))
                    });
                }

                console.log("breadCrumb", breadCrumb);
            };
            var serializeState = function (state) {

                /*return state ? state.data.breadCrumbName + state.data.breadCrumbParams
                 .map(function (propertyName) {
                 return " " + _.get(state, propertyName);
                 }) : "";*/
                return state ? state.data.breadCrumbName : "";
            };
            var getDefaultState = function () {

                var rootState = $state.get(rootStateName);
                return rootState ? {
                    name: rootStateName,
                    label: serializeState(rootState)
                } : "";
            };
            var getBreadCrumb = function () {

                return breadCrumb;
            };

            return {
                updateBreadCrumbLocation: updateBreadCrumbLocation,
                getBreadCrumb: getBreadCrumb
            };
        })
        .controller("BreadCrumbController", function BreadCrumbController($state,
                                                                          breadCrumbFactory) {

            console.log("BreadCrumbController");
            var ctrl = this;
            ctrl.state = $state;
            ctrl.factory = breadCrumbFactory;
        })
        .directive("breadCrumb", function () {
            return {
                restrict: "E",
                templateUrl: "app/common/breadCrumb/breadCrumb.directive.html",
                controller: "BreadCrumbController as breadCrumbCtrl"
            }
        });
})();