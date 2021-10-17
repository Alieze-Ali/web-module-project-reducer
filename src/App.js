// Task 2d. Import useReducer hook
import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

// Task 2e. Import reducer & initalState
import reducer, { initialState } from './reducers';
// Task 4b. Import addOne action creator
//import { addOne } from './actions';

// Task 5a/b: import in applyNumber action creator to replace addOne for optimal functionality
import { applyNumber } from './actions';

function App() {
// Task 3: Display state within the UI
const [ state, dispatch ] = useReducer(reducer, initialState);
// console.log(state);
// Task 4c-2: Create event handler connected to the 1 button onClick method
const handle1Click = () => {
  //console.log('here');
  // Task 4d: Dispatch addOne action creator
  //dispatch(addOne());
}
// Task 5d: create eventhandler that takes in a number as an argument and dispatches 'applyNumber' with it
const handleNumberClick = (number) => {
  dispatch(applyNumber(number));
}
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            {/* Task 3c */}
            <TotalDisplay value={state.total}/>
            <div className="row details">
              {/* Task 3a */}
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              {/* Task 3b */}
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              {/* Task 4c-1: add onClick method */}
              {/* <CalcButton value={1} onClick={handle1Click}/> */}
              {/* Task 5e/f/g: attach eventhandler applyNumber to onClick remember to wrap it in a function & invoke the function passed */}
              <CalcButton value={1} onClick={() => handleNumberClick(1)}/>
              <CalcButton value={2} onClick={() => handleNumberClick(2)}/>
              <CalcButton value={3} onClick={() => handleNumberClick(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleNumberClick(4)}/>
              <CalcButton value={5} onClick={() => handleNumberClick(5)}/>
              <CalcButton value={6} onClick={() => handleNumberClick(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleNumberClick(7)}/>
              <CalcButton value={8} onClick={() => handleNumberClick(8)}/>
              <CalcButton value={9} onClick={() => handleNumberClick(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"}/>
              <CalcButton value={"*"}/>
              <CalcButton value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
