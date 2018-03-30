import * as React from 'react';
import InputInlineEdit from './InputInlineEdit.js';
import { Student } from '../types';

const styles = {
  color: 'red'
};

interface Props {
  index: number;
  id: Student["id"];
  fullName: Student["fullName"];
  score: Student["score"];
  removeStudent: (id: string) => void;
}


const StudentListItem = (props: Props) => (
  <div className="table__row" {/** @type {{search: React.CSSProperties}} */} style={+props.score < 65 ? styles : null }>
    <div className="table__item">{props.index+1}.</div>
    <InputInlineEdit inputValueType="name" id={props.id} value={props.fullName} />
    <InputInlineEdit inputValueType="score" id={props.id} value={props.score} />
    <div className="table__item">{+props.score < 65 ? 'Fail' : 'Pass'}<button onClick={() => props.removeStudent(props.id)}>&#10005;</button></div>
  </div>
)

export default StudentListItem;