import { createStore } from 'redux';

const configureStore = (rootReducer, initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
  );
  return store;
}

export default configureStore;