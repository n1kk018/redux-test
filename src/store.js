import { createStore } from "redux";
import produce from "immer";

const reducer = (baseState = { counters: [0, 0] }, action) => {
  const { type, payload } = action;
  const nextState = produce(baseState, draftState => {
    if (type === "INCREMENT") {
      draftState.counters[payload.index] += 1;
    } else if (type === "DECREMENT") {
      draftState.counters[payload.index] -= 1;
    } else if (type === "INCREMENT_BY") {
      draftState.counters[payload.index] += payload.amount;
    } else if (type === "ADD_COUNTER") {
      draftState.counters.push(0);
    } else if (type === "REMOVE_COUNTER") {
      draftState.counters.pop();
    }
  });
  return nextState;
};

export const counterStore = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
