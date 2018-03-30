import { Student } from '../types';
import { StudentAction } from '../actions/students';
import * as constants from '../constants';

const defaultStudentsState: Student[] = [];

const studentsReducer = (state: Student[] = defaultStudentsState, action: StudentAction): Student[] => {
  switch (action.type) {
    
    case constants.ADD_STUDENT:
      return [action.payload, ...state];
      
    case constants.REMOVE_STUDENT:
      return state.filter(student => student.id !== action.payload);
    
    case constants.EDIT_STUDENT_NAME:
      return state.map(student => {
        if (student.id !== action.payload.id) return student;
        return {
          ...student,
          fullName: action.payload.fullName
        };
      });
    
    case constants.EDIT_STUDENT_SCORE:
      return state.map(student => {
        if (student.id !== action.payload.id) return student;
        return {
          ...student,
          score: action.payload.score
        };
      });
    
    default:
      return state;
  }
};

export default studentsReducer;