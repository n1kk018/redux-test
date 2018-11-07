import React from "react";
import { render } from "react-dom";
import { counterStore } from "./store";
import Counter from "./Counter";
import Button from "./Button";
import StoreCtx from "./StoreCtx";

counterStore.subscribe(() => {
  doRender();
});

const doRender = () => {
  render(
    <StoreCtx.Provider value={counterStore}>
      <Button action="ADD_COUNTER" />
      <Button action="REMOVE_COUNTER" />
      {counterStore.getState().counters.map((v, i) => 
        <Counter index={i} />
      )}
    </StoreCtx.Provider>,
    document.getElementById("root")
  );
};

doRender();
