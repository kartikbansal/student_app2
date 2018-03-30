import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { removeStudent } from '../actions/students';
import StudentListItem from './StudentListItem';
import { StoreState, Student } from '../types';
import * as actions from '../actions/students';

interface Props {
  students: Student[];
  removeStudent: (id: string) => void;
}

const StudentList = (props: Props) => {
  if(!props.students.length) {
    return (
      <p className="msg">Please add Student's details</p>
    );
  }

  return (
    <div className="table">
      <div className="table__head">
        <div className="table__row">
          <div className="table__head__item table__item">S.No.</div>
          <div className="table__head__item table__item">Name</div>
          <div className="table__head__item table__item">Score</div>
          <div className="table__head__item table__item">Result</div>
        </div>
      </div>
      <div className="table__body">
        {props.students.map((student, index) => {
          return <StudentListItem key={student.id} {...student} index={index} removeStudent={props.removeStudent} />
        })}
      </div>
    </div>
  );
    
}

const mapStateToProps = (state: StoreState): { students: Student[] } => {
  return {
    students: state.students
  };
}

const mapDispatchToProps = (dispatch: Dispatch<actions.StudentAction>) => {
  return {
    removeStudent: (id: string) => dispatch(removeStudent(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);