import {Component, OnInit} from "angular2/core";
import {TodoService} from "./todo.service";
import {Todo} from "../model/todo/todo";
import {DataHelperService} from "../common/dataHelper.service";

@Component({
    selector: "todo",
    templateUrl: "app/todo/todo.template.html"
})
export class TodoComponent implements OnInit {

    todos:Todo[];
    pendingTodos:Todo[];
    doneTodos:Todo[];

    newTodoDescription:string;

    constructor(private _service:TodoService,
                private _dataHelper:DataHelperService) {
    }

    ngOnInit():any {
        this.getTodos();
    }

    private getTodos() {

        this._service.getAllTodos()
            .subscribe(data => {
                this._dataHelper.validateGenericResponse(data);
                this.todos = data.todos;
                this.pendingTodos = data.todos.filter(todo => !todo.done);
                this.doneTodos = data.todos.filter(todo => todo.done);
            });
    }

    private addTodo() {

        this._service.saveTodo(this.newTodoDescription)
            .subscribe(data => {
                this._dataHelper.validateGenericResponse(data);
                this.getTodos();
            });
    }

    private updateTodo(todoId:number) {

        this._service.markTodoAsDone(todoId)
            .subscribe(data => {
                this._dataHelper.validateGenericResponse(data);
            });
    }

    private deleteTodo(todoId:number) {

        this._service.deleteTodo(todoId)
            .subscribe(data => {
                this._dataHelper.validateGenericResponse(data);
            });
    }
}