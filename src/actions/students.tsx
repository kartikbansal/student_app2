import * as constants from '../constants';
import { Student, StudentNameUpdate, StudentScoreUpdate } from '../types/index';

export interface AddStudent {
  type: constants.ADD_STUDENT;
  payload: Student;
}

export interface RemoveStudent {
  type: constants.REMOVE_STUDENT;
  payload: string;
}

export interface EditStudentName {
  type: constants.EDIT_STUDENT_NAME;
  payload: StudentNameUpdate;
}

export interface EditStudentScore {
  type: constants.EDIT_STUDENT_SCORE;
  payload: StudentScoreUpdate;
}

export type StudentAction = AddStudent | RemoveStudent | EditStudentName | EditStudentScore;

//ADD STUDENT
export const addStudent = (student: Student): AddStudent => {
  return {
    type: constants.ADD_STUDENT,
    payload: {
      ...student
    }
  };
};

//REMOVE STUDENT
export const removeStudent = (id: string): RemoveStudent  => {
  return {
    type: constants.REMOVE_STUDENT,
    payload: id
  };
};

//EDIT STUDENT NAME
export const editStudentName = (updates: StudentNameUpdate): EditStudentName => {
  return {
    type: constants.EDIT_STUDENT_NAME,
    payload: {
      ...updates
    }
  };
};

//EDIT STUDENT SCORE
export const editStudentScore = (updates: StudentScoreUpdate): EditStudentScore => {
  return {
    type: constants.EDIT_STUDENT_SCORE,
    payload: {
      ...updates
    }
  };
};