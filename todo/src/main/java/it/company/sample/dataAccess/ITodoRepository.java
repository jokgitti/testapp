package it.company.sample.dataAccess;

import it.company.sample.dataAccess.entities.Todo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

@Component
public interface ITodoRepository extends CrudRepository<Todo, Long> {
}
