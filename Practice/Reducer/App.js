import React from 'react';

export function counterReducer(state, action) {
    
    if(action.type === 'INCREMENT') {
        // state.count += 1;
        return { count: state.count + 1 };
    }
    
    if(action.type === 'DECREMENT') {
        // state.count -= 1;
        return { count: state.count - 1 };
    }
    
    if(action.type === 'RESET') {
        // state.count = 0;
        return { count: 0 };
    }
    return state;
}

function App() {
    
    const [countState, countDispatch] = React.useReducer(counterReducer,{
        count: 0
    });
    
    
  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={() => countDispatch({
            type:'INCREMENT'
        })}>Increment</button>
        <button onClick={() => countDispatch({
            type:'DECREMENT'
        })}>Decrement</button>
        <button onClick={() => countDispatch({
            type:'RESET'
        })}>Reset</button>
      </p>
      <p id="counter">
        {countState.count}
      </p>
    </div>
  );
}

export default App;
