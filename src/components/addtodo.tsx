import { FormEvent, useState } from 'react';
import { useToDos } from '../store/todos';

const Addtodo = () => {
  const { handleAddTodo } = useToDos();
  const [todo, setTodo] = useState("");
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  }
  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col items-center justify-center my-4">
      <div className="flex items-center mb-2">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 mr-2"
          placeholder="Add a new task"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">Add</button>
      </div>
    </form>
  );
}

export default Addtodo;
