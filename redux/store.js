import { createStore } from "redux";
import reducer from "./reducers/index";

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState);
  return store;
}

// store.dispatch({
//     type: 'ADD_TODO',
//     text: 'Read the docs'
//   })
