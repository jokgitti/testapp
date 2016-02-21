package it.company.sample.service.bean.todo;

import it.company.sample.service.bean.common.GenericResponse;

import java.util.List;

public class GetTodosResponse extends GenericResponse {

    private List<Todo> todos;

    public List<Todo> getTodos() {
        return todos;
    }

    public void setTodos(List<Todo> todos) {
        this.todos = todos;
    }
}
