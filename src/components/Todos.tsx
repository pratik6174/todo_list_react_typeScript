import React from 'react';
import { useToDos } from '../store/todos';
import { useSearchParams } from 'react-router-dom';

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteToDo } = useToDos();
  let filterData = todos;
  const [searchParams] = useSearchParams();
  let todosData = searchParams.get("todos");

  if (todosData === "active") {
    filterData = filterData.filter((todo) => !todo.completed);
  }
  if (todosData === "completed") {
    filterData = filterData.filter((todo) => todo.completed);
  }
  return (
    <ul className="list-none p-0 m-0 w-full max-w-md mx-auto my-4">
      {filterData.map((todo) => (
        <li key={todo.id} className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleTodoAsCompleted(todo.id)}
              className="mr-2"
            />
            <label htmlFor={`todo-${todo.id}`} className={todo.completed ? "line-through" : ""}>
              {todo.task}
            </label>
          </div>
          {todo.completed && (
            <button
              onClick={() => handleDeleteToDo(todo.id)}
              className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Todos;
