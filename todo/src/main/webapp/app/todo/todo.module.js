"use strict";

(function () {

    angular.module("todo.module", ["todo.factory.module", "todo.details.module"])
        .controller("TodoController", function TodoController($state, todoFactory) {

            var ctrl = this;
            ctrl.state = $state;
            ctrl.repository = todoFactory;
            ctrl.todos = null;
            ctrl.pendingTodos = null;
            ctrl.doneTodos = null;

            ctrl.todoDescription = null;

            ctrl.init = function () {

                ctrl.getTodos();
            };

            ctrl.getTodos = function () {
                ctrl.repository.getTodos()
                    .success(function (data) {

                        if (data.statusCode != "OK") {
                            alert("error getting todos. Message: " + data.statusMessage);
                            return;
                        }
                        ctrl.todos = data.todos;
                        ctrl.pendingTodos = ctrl.todos.filter(function (elem) {
                            return !elem.done;
                        });
                        ctrl.doneTodos = ctrl.todos.filter(function (elem) {
                            return elem.done;
                        })
                    })
                    .error(function (data, status) {
                        if (data && data.statusMessage)
                            alert("error getting todos. Status: " + status + " Message: " + data.statusMessage);
                        else
                            alert("error getting todos. Status: " + status + " Unhandled error: " + data);
                    });
            };

            ctrl.addTodo = function () {
                if (!ctrl.todoDescription) {
                    alert("Insert a description.");
                    return;
                }
                ctrl.repository.createTodo(ctrl.todoDescription)
                    .success(function (data) {

                        if (data.statusCode != "OK") {
                            alert("error adding todo. Message: " + data.statusMessage);
                            return;
                        }
                        ctrl.todoDescription = null;
                        ctrl.getTodos();
                    })
                    .error(function (data, status) {
                        if (data && data.statusMessage)
                            alert("error creating todo. Status: " + status + " Message: " + data.statusMessage);
                        else
                            alert("error creating todo. Status: " + status + " Unhandled error: " + data);
                    });
            };

            ctrl.updateTodo = function (todoId) {
                ctrl.repository.updateTodo(todoId)
                    .success(function (data) {

                        if (data.statusCode != "OK") {
                            alert("error updating todo. Message: " + data.statusMessage);
                            return;
                        }
                        ctrl.getTodos();
                    })
                    .error(function (data, status) {
                        if (data && data.statusMessage)
                            alert("error updating todo. Status: " + status + " Message: " + data.statusMessage);
                        else
                            alert("error updating todo. Status: " + status + " Unhandled error: " + data);
                    });
            };

            ctrl.removeTodo = function (todoId) {
                ctrl.repository.deleteTodo(todoId)
                    .success(function (data) {

                        if (data.statusCode != "OK") {
                            alert("error deleting todo. Message: " + data.statusMessage);
                            return;
                        }
                        ctrl.getTodos();
                    })
                    .error(function (data, status) {
                        if (data && data.statusMessage)
                            alert("error deleting todo. Status: " + status + " Message: " + data.statusMessage);
                        else
                            alert("error deleting todo. Status: " + status + " Unhandled error: " + data);
                    });
            };

            ctrl.todoDetails = function (todoId) {

                ctrl.state.go("todo.details", {todoId: todoId});
            };

            ctrl.init();
        });
})();