package it.company.sample.businessLogic;

import it.company.sample.dataAccess.ITodoRepository;
import it.company.sample.dataAccess.entities.Todo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * classe utilizzata per effettuare logica tra i dati di input al servizio todo e i dati di output da database
 */
@Component
public class TodoManager {

    @Autowired
    private ITodoRepository todoRepository;

    public it.company.sample.service.bean.todo.Todo getTodoById(String id) {

        Todo entityTodo = todoRepository.findOne(new Long(id));
        if (null == entityTodo)
            return null;

        return entityTodoToServiceTodo(entityTodo);
    }

    public List<it.company.sample.service.bean.todo.Todo> getTodos() {

        Iterable<Todo> items = todoRepository.findAll();
        if (null == items)
            return null;
        return entityTodosToServiceTodos(items);
    }

    public String createTodo(it.company.sample.service.bean.todo.Todo todo) {

        Todo entityTodo = todoRepository.save(serviceTodoToEntityTodo(todo));
        return entityTodo.getId().toString();
    }

    public void deleteTodo(String id) {

        todoRepository.delete(new Long(id));
    }

    public void updateTodo(String id) {

        Todo todo = todoRepository.findOne(new Long(id));
        todo.setDone(true);
        todoRepository.save(todo);
    }

    private it.company.sample.service.bean.todo.Todo entityTodoToServiceTodo(Todo entityTodo) {

        it.company.sample.service.bean.todo.Todo serviceTodo = new it.company.sample.service.bean.todo.Todo();
        BeanUtils.copyProperties(entityTodo, serviceTodo);
        return serviceTodo;
    }

    private Todo serviceTodoToEntityTodo(it.company.sample.service.bean.todo.Todo serviceTodo) {

        Todo entityTodo = new Todo();
        BeanUtils.copyProperties(serviceTodo, entityTodo);
        return entityTodo;
    }

    private List<it.company.sample.service.bean.todo.Todo> entityTodosToServiceTodos(Iterable<Todo> entityTodos) {

        List<it.company.sample.service.bean.todo.Todo> serviceTodos = new ArrayList<>();
        for (Todo todo : entityTodos) {
            serviceTodos.add(entityTodoToServiceTodo(todo));
        }
        return serviceTodos;
    }
}
