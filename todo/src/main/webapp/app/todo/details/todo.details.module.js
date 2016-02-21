"use strict";

(function () {

    angular.module("todo.details.module", [])
        .controller("TodoDetailsController", function TodoDetailsController($state, $stateParams, todoFactory) {

            var ctrl = this;
            ctrl.state = $state;
            ctrl.repository = todoFactory;
            ctrl.todoId = $stateParams.todoId;
            ctrl.todo = null;

            ctrl.init = function () {

                ctrl.getTodo(ctrl.todoId);
            };

            ctrl.getTodo = function (todoId) {

                ctrl.repository.getTodo(todoId)
                    .success(function (data) {

                        if (data.statusCode |= "OK") {
                            alert("error getting todo. Message: " + data.statusMessage);
                            return;
                        }
                        ctrl.todo = data.todo;
                    })
                    .error(function (data, status) {
                        if (data && data.statusMessage)
                            alert("error getting todo. Status: " + status + " Message: " + data.statusMessage);
                        else
                            alert("error getting todo. Status: " + status + " Unhandled error: " + data);
                    });
            };
            if (ctrl.state.is("todo.details"))
                ctrl.init();
        });
})();