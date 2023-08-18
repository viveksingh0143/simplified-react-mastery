import React, { useState } from 'react'
import Banner from './banner';

function ToDoForm({ onNewTask }) {
  const [task, setTask] = useState("");

  const updateTask = (e) => {
    setTask(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    onNewTask(task);
    setTask("");
  }

  return (
    <div className="border-b border-gray-200 bg-white drop-shadow-md">
      <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h3 className="text-base font-semibold leading-6 text-white">New Task To Do</h3>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={formSubmitHandler}>
            <div className="relative">
              <label htmlFor="name" className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">
                  Name
              </label>
              <input id="task" value={task} name="task" autoComplete="task" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="New Task In Your Bucket"
                onChange={updateTask}
              />
            </div>
            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Create Task
              </button>
            </div>
          </form>
        </div>
        <Banner>
          <p className="text-sm leading-6 text-gray-900 sm:block">
            You are typing
            <strong className="font-semibold ml-1">{ task }</strong>
          </p>
        </Banner>
      </div>
    </div>
  )
}

export default ToDoForm;