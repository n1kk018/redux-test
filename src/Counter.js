import React from "react";
import StoreCtx from "./StoreCtx";

const Counter = ({ index }) => (
  <StoreCtx.Consumer>
    {store => (
      <div>
        {store.getState().counters[index] > 0 && (
          <button
            onClick={() =>
              store.dispatch({ type: "DECREMENT", payload: { index: index } })
            }
          >
            -
          </button>
        )}
        {store.getState().counters[index]}
        {store.getState().counters.reduce((memo, val) => memo + val) < 20 &&
          store.getState().counters[index] < 10 && (
            <button
              onClick={() =>
                store.dispatch({ type: "INCREMENT", payload: { index: index } })
              }
            >
              +
            </button>
          )}
      </div>
    )}
  </StoreCtx.Consumer>
);

export default Counter;
