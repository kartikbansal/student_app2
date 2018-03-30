import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import studentsReducer from './students';
import { StoreState } from '../types';

// export default combineReducers({
//   students: studentsReducer,
//   form: formReducer
// });


export default combineReducers<StoreState>({
  students: studentsReducer
});