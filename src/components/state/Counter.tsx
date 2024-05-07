import React, { useReducer } from "react";

interface CounterState {
  count: number;
}
interface UpdateAction {
  type: "Increment" | "Decrement";
  payload: number;
}
interface ResetAction {
  type: "Reset";
}
const initialState: CounterState = { count: 0 };

const reducer = (state: CounterState, action: UpdateAction | ResetAction) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.payload };
    case "Decrement":
      return { count: state.count - action.payload };
    case "Reset":
      return initialState;
    default:
      return state;
  }
};
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count : {state.count}</h1>
      <button onClick={() => dispatch({ type: "Increment", payload: 10 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "Decrement", payload: 10 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
}

export default Counter;
