import {Component, OnInit} from "angular2/core";
import {Todo} from "../model/todo/todo";
import {TodoService} from "./todo.service";
import {DataHelperService} from "../common/dataHelper.service";
import {Router} from "angular2/router";

@Component({
    selector: "todo",
    templateUrl: "app/todo/todo.template.html",
    providers: [TodoService, DataHelperService]
})
export class TodoComponent implements OnInit {

    todos:Todo[];
    pendingTodos:Todo[];
    doneTodos:Todo[];

    newTodoDescription:string;

    constructor(private _router:Router,
                private _service:TodoService,
                private _dataHelper:DataHelperService) {
    }

    ngOnInit():any {
        this.getTodos();
    }

    private getTodos() {

        this._service.getAllTodos()
            .subscribe(response => {
                this._dataHelper.validateGenericResponse(response);
                this.todos = response.todos;
                this.pendingTodos = response.todos.filter(todo => !todo.done);
                this.doneTodos = response.todos.filter(todo => todo.done);
            });
    }

    public addTodo() {

        this._service.saveTodo(this.newTodoDescription)
            .subscribe(data => {
                this._dataHelper.validateGenericResponse(data);
                this.getTodos();
            });
    }

    public updateTodo(todoId:number) {

        this._service.markTodoAsDone(todoId)
            .subscribe(data => {
                this._dataHelper.validateGenericResponse(data);
            });
    }

    public deleteTodo(todoId:number) {

        this._service.deleteTodo(todoId)
            .subscribe(data => {
                this._dataHelper.validateGenericResponse(data);
            });
    }

    public todoDetails(todo:Todo) {

        let link = ["TodoDetails", {id: todo.id}];
        this._router.navigate(link);
    }
}