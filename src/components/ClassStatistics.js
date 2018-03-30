import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ClassStatistics = (props) => {
  const scoreArr = props.students.map(student => +student.score);
  const max = Math.max(...scoreArr);
  const min = Math.min(...scoreArr);
  const average = scoreArr.reduce((a,b) => a + b, 0) / scoreArr.length;
  return (
    <div className="box container fig-box ">
      <div className="wrapper">
        <Link to="/">&larr; Back to home</Link>
        <div className="inner-wrapper">
          <div className="stats-box">max<span>{max}</span></div>
          <div className="stats-box">min<span>{min}</span></div>
          <div className="stats-box">average<span>{average}</span></div>
        </div>
      </div>
      
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

export default connect(mapStateToProps)(ClassStatistics);