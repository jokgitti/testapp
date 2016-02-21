"use strict";

(function () {

    angular.module("todo.factory.module", [])
        .factory("todoFactory", function apiConfig($http) {

            var baseUrl = "todo/";
            var getTodos = function () {
                return $http.get(baseUrl);
            };
            var getTodo = function (todoId) {
                return $http.get(baseUrl + todoId);
            };
            var deleteTodo = function (todoId) {
                return $http.delete(baseUrl + todoId);
            };
            var createTodo = function (todoDescription) {
                return $http.post(baseUrl, todoDescription);
            };
            var updateTodo = function (todoId) {
                return $http.put(baseUrl + todoId);
            };
            return {
                getTodo: getTodo,
                getTodos: getTodos,
                deleteTodo: deleteTodo,
                createTodo: createTodo,
                updateTodo: updateTodo
            };
        });
})();