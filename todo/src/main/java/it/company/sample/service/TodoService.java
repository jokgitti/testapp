package it.company.sample.service;


import it.company.sample.businessLogic.TodoManager;
import it.company.sample.service.bean.common.GenericResponse;
import it.company.sample.service.bean.todo.GetTodoResponse;
import it.company.sample.service.bean.todo.GetTodosResponse;
import it.company.sample.service.bean.todo.CreateTodoResponse;
import it.company.sample.service.bean.todo.Todo;
import it.company.sample.service.utils.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/todo")
public class TodoService {

    @Autowired
    private TodoManager manager;

    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody GetTodosResponse getTodos() {

        GetTodosResponse response = new GetTodosResponse();
        try {
            response.setTodos(manager.getTodos());
            response.setStatusCode(Constants.RESP_OK);
        } catch (Exception ex) {
            response.setStatusCode(Constants.RESP_KO);
            response.setStatusMessage(ex.getMessage());
        }
        return response;
    }

    @RequestMapping(value = "/{todoId}", method = RequestMethod.GET)
    public @ResponseBody GetTodoResponse getTodo(@PathVariable("todoId") String todoId) {

        GetTodoResponse response = new GetTodoResponse();
        if (null == todoId || todoId.isEmpty()) {
            response.setStatusCode(Constants.RESP_KO);
            response.setStatusMessage("Todo id is mandatory.");
            return response;
        }
        try {
            response.setTodo(manager.getTodoById(todoId));
            response.setStatusCode(Constants.RESP_OK);
        } catch (Exception ex) {
            response.setStatusCode(Constants.RESP_KO);
            response.setStatusMessage(ex.getMessage());
        }
        return response;
    }

    @RequestMapping(method = RequestMethod.POST)
    public @ResponseBody CreateTodoResponse createTodo(@RequestBody String todoDescription) {

        CreateTodoResponse response = new CreateTodoResponse();
        if (null == todoDescription || todoDescription.isEmpty()) {
            response.setStatusCode(Constants.RESP_KO);
            response.setStatusMessage("Todo description is mandatory.");
            return response;
        }
        try {
            Todo todo = new Todo(todoDescription);
            String itemId = manager.createTodo(todo);
            if (null == itemId) {
                response.setStatusMessage("Todo not inserted.");
                response.setStatusCode(Constants.RESP_KO);
                return response;
            }
            response.setTodoId(itemId);
            response.setStatusCode(Constants.RESP_OK);
        } catch (Exception ex) {
            response.setStatusCode(Constants.RESP_KO);
            response.setStatusMessage(ex.getMessage());
        }
        return response;
    }

    @RequestMapping(value = "/{todoId}", method = RequestMethod.DELETE)
    public @ResponseBody GenericResponse deleteTodo(@PathVariable("todoId") String todoId) {

        GenericResponse response = new GenericResponse();
        if (null == todoId || todoId.isEmpty()) {
            response.setStatusCode(Constants.RESP_KO);
            response.setStatusMessage("Todo id is mandatory.");
            return response;
        }
        try {
            manager.deleteTodo(todoId);
        } catch (Exception ex) {
            response.setStatusCode(Constants.RESP_KO);
            response.setStatusMessage(ex.getMessage());
        }
        return response;
    }

    @RequestMapping(value = "/{todoId}", method = RequestMethod.PUT)
    public  @ResponseBody GenericResponse updateTodo(@PathVariable("todoId") String todoId){

        GenericResponse response = new GenericResponse();
        if (null == todoId || todoId.isEmpty()) {
            response.setStatusCode(Constants.RESP_KO);
            response.setStatusMessage("Todo id is mandatory.");
            return response;
        }
        try {
            manager.updateTodo(todoId);
        } catch (Exception ex) {
            response.setStatusCode(Constants.RESP_KO);
            response.setStatusMessage(ex.getMessage());
        }
        return response;
    }
}
