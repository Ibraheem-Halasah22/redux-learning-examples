import { createStore } from "redux";
import { reducer } from "./reducers.js";
import { buyCake } from "./actions.js";

const store = createStore(reducer);
console.log("Initial State: ", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated State: ", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
