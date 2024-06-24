import React from 'react';
import Addtodo from './components/addtodo';
import Todos from './components/Todos';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold text-center my-4">ToDo with React + TypeScript</h1>
      <div>
        <Navbar />
        <Addtodo />
        <Todos />
      </div>
    </main>
  );
}

export default App;
