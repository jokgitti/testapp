import {Component} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {TodoComponent} from "./todo/todo.component";
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {TodoDetailsComponent} from "./todo/tododetails/todo.details.component";
@Component({
    selector: "app",
    templateUrl: "app/app.template.html",
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, TodoComponent, TodoDetailsComponent],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: "/todos", name: "Todos", component: TodoComponent, useAsDefault: true},
    {path: "/todo/:id", name: "TodoDetails", component: TodoDetailsComponent}
])
export class AppComponent {

    constructor() {
    }
}