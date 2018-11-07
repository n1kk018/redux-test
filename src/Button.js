import React from "react";
import StoreCtx from "./StoreCtx";

const Button = ({ action }) => (
  <StoreCtx.Consumer>
    {store => (
      <div>
        {
          <button onClick={() => store.dispatch({ type: action })}>
            {action.toLowerCase().replace("_", " ")}
          </button>
        }
      </div>
    )}
  </StoreCtx.Consumer>
);

export default Button;
