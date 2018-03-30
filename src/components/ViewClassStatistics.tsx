import * as React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { StoreState, Student } from '../types';

export interface Props {
  students: Student[]
}

const ViewClassStatistics = ({ students }: Props) => (
  <React.Fragment>
    { students.length
      ? <Link to="/stats">View Class Statistics &rarr;</Link>
      : null 
    } 
  </React.Fragment>
);

const mapStateToProps = (state: StoreState): {students: Student[]} => {
  return {
    students: state.students
  }
}

export default connect(mapStateToProps)(ViewClassStatistics);