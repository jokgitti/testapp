import {Component, OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";
import {DataHelperService} from "../../common/dataHelper.service";
import {TodoService} from "../todo.service";
import {Todo} from "../../model/todo/todo";
@Component({
    selector: "todo-details",
    templateUrl: "app/todo/tododetails/todo.details.template.html",
    providers: [TodoService, DataHelperService]
})
export class TodoDetailsComponent implements OnInit {

    todo:Todo;

    constructor(private _routeParams:RouteParams,
                private _service:TodoService,
                private _dataHelper:DataHelperService) {
    }

    ngOnInit():any {

        let todoId = this._routeParams.get("id");
        this.getTodo(Number(todoId));
    }

    private getTodo(todoId:number) {

        this._service.getTodoById(todoId)
            .subscribe(response => {
                this._dataHelper.validateGenericResponse(response);
                this.todo = response.todo;
            });
    }
}