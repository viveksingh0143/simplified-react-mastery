import './App.css';
import FunctionalComponent from './components/functionalComponent';
import ClassComponent from './components/classComponent';
import FunctionComponentsWithCounterState from './components/functionComponentsWithCounterState';
import ClassComponentsWithCounterState from './components/classComponentsWithCounterState';
import FunctionComponentsWithProps from './components/functionComponentsWithProps';
import ClassComponentsWithProps from './components/classComponentsWithProps';
import ClassComponentLifeCycle from './components/classComponentLifeCycle';
import { useState } from 'react';
import FunctionComponentLifeCycle from './components/functionComponentLifeCycle';

function App() {
  const [showLifeCycle, setShowLifeCycle] = useState(false);

  const toggleLifeCycle = () => {
    setShowLifeCycle(val => !val);
  };

  return (
    <div className="App">
      {/* <FunctionalComponent name="Vivek Singh" /> */}
      {/* <ClassComponent name="Vivek Singh" />
      <FunctionComponentsWithCounterState />
      <ClassComponentsWithCounterState />
      <FunctionComponentsWithProps name="Vivek" dob="30th Sep." />
      <ClassComponentsWithProps name="Vivek" dob="30th Sep." /> */}

      <div>
        <label>
          <input type='checkbox' name="type" onChange={() => toggleLifeCycle()} />
          <span>Show Life Cycle</span>
        </label>
      </div>
      {/* { showLifeCycle && <ClassComponentLifeCycle /> } */}
      { showLifeCycle && <FunctionComponentLifeCycle/> }
    </div>
  );
}

export default App;
