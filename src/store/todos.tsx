import React, { createContext, ReactNode, useState, useContext } from 'react';

// Create a context for Todos
export const TodosContext = createContext<TodosContextProps | undefined>(undefined);

export type ToDoProviderProps = {
  children: ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
}

export type TodosContextProps = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  toggleTodoAsCompleted: (id: string)=> void;
  handleDeleteToDo: (id: string)=> void;
}

// Define the Todos component
const Todos: React.FC<ToDoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(()=>{
    try{
      const newTodos = localStorage.getItem("todos") || "[]";
      return JSON.parse(newTodos) as Todo[]
    } catch(error) {
      return []
    }
  });

  const handleAddTodo = (task: string) => {
    setTodos((prev) => {
      const newToDo: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...(prev || []),
      ];
      // console.log("the previous data", prev);
      // console.log("the current data of todo", newToDo);
      localStorage.setItem("todos",JSON.stringify(newToDo));
      return newToDo;
    });
  };
  const toggleTodoAsCompleted=(id: string)=>{
    setTodos((prev)=>{
      let newToDo= prev.map((todo)=>{
        if(todo.id===id){
          return { ...todo, completed:!todo.completed}
        }
        else{
          return todo;
        }
      })
      localStorage.setItem("todos",JSON.stringify(newToDo));
      return newToDo;
    });
  };

  const handleDeleteToDo= (id: string)=>{
    setTodos((prev)=>{
      let newToDO= prev.filter(todo=> todo.id != id);
      localStorage.setItem("todos",JSON.stringify(newToDO));
      return newToDO;
    })
  }

  return (
    <TodosContext.Provider value={{ todos, handleAddTodo, toggleTodoAsCompleted, handleDeleteToDo }}>
      {children}
    </TodosContext.Provider>
  );
};

// Consumer
export const useToDos = () => {
  const context = useContext(TodosContext);
  if (context === undefined) {
    throw new Error('useToDos must be used within a TodosProvider');
  }
  return context;
}

export default Todos;
