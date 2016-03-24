import {GenericResponse} from "../common/genericResponse";
import {Todo} from "./todo";

export class GetTodoResponse extends GenericResponse {

    todo:Todo;
}

export class GetTodosResponse extends GenericResponse {

    todos:Todo[];
}

export class CreateTodoResponse extends GenericResponse {

    todoId:string;
}