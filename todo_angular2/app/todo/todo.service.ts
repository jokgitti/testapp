import {Injectable} from "angular2/core";
import {CONFIG} from "../common/config";
import {Http, Response} from "angular2/http";
import {GetTodosResponse, GetTodoResponse, CreateTodoResponse} from "../model/todo/todoResponses";
import {GenericResponse} from "../model/common/genericResponse";

let todoBaseUrl = CONFIG.baseUrls.todo;

@Injectable()
export class TodoService {

    constructor(private _http:Http) {
    }

    getAllTodos() {
        return this._http.get(`${todoBaseUrl}`)
            .map((response:Response) => <GetTodosResponse>response.json().data);
    }

    getTodoById(todoId:number) {
        return this._http.get(`${todoBaseUrl}/${todoId.toString()}`)
            .map((response:Response) => <GetTodoResponse>response.json().data);
    }

    saveTodo(description:string) {
        return this._http.post(`${todoBaseUrl}`, description)
            .map((response:Response) => <CreateTodoResponse>response.json().data);
    }

    markTodoAsDone(todoId:number) {
        return this._http.put(`${todoBaseUrl}/${todoId.toString()}`, undefined)
            .map((response:Response) => <GenericResponse>response.json().data);

    }

    deleteTodo(todoId:number) {
        return this._http.delete(`${todoBaseUrl}/${todoId.toString()}`)
            .map((response:Response) => <GenericResponse>response.json().data);
    }
}