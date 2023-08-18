import React, { useState, useEffect } from 'react'

function ToDoList({ newTask }) {
  const [tasks, setTasks] = useState(["React Walkthrough", "useState"]);

  useEffect(() => {
    if (!newTask) return;
    setTasks([...tasks, newTask]);
  }, [newTask])
  

  return (
    <div className="border-b border-gray-200 bg-white drop-shadow-md">
      <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h3 className="text-base font-semibold leading-6 text-white">Task List</h3>
      </div>
      <div className="px-4 py-5 sm:px-6">
        {tasks.length <= 0 && <p>There are no task to show</p>}
        <ul role="list" className="space-y-3">
          {tasks.map((task, index) => (
            <li key={index} className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ToDoList;