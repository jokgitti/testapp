package it.company.sample.service.bean.todo;

import it.company.sample.service.bean.common.GenericResponse;

public class CreateTodoResponse extends GenericResponse {

    private String todoId;

    public String getTodoId() {
        return todoId;
    }

    public void setTodoId(String todoId) {
        this.todoId = todoId;
    }
}
