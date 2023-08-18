import { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function ToDoApp() {
  const [newTask, setNewTask] = useState("")

  const newTaskHandler = (task) => {
    setNewTask(task);
  }
  return (
    <div className="flex flex-row p-4 mx-auto">
      <div className="flex-1">
        <ToDoList newTask={newTask} />
      </div>
      <div className="basis-1/3 ml-4">
        <ToDoForm onNewTask={newTaskHandler} />
      </div>
    </div>
  );
}

export default ToDoApp;