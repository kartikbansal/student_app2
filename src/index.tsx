import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore.js';
import rootReducer from './reducers/index.js';
import { saveState, loadState } from './utils/localStorage.js';
// import 'normalize.css/normalize.css';
// import './styles/styles.scss';

const initialState = loadState();
const store = configureStore(rootReducer, initialState);
store.subscribe(() => {
  const {
    students,
  } = store.getState();
  saveState({
    students
  });
});

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
