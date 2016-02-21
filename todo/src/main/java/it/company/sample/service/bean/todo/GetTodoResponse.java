package it.company.sample.service.bean.todo;

import it.company.sample.service.bean.common.GenericResponse;

public class GetTodoResponse extends GenericResponse {

    private Todo todo;

    public Todo getTodo() {
        return todo;
    }

    public void setTodo(Todo todo) {
        this.todo = todo;
    }
}
