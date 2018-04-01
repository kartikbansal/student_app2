import * as React from 'react';
import { connect } from 'react-redux';
// import { edruxForm, Field } from 'redux-form';
import * as uuid from "uuid";
import { titleCase } from '../utils/helpers.js';
import { addStudent } from '../actions/students.js';

// const validate = values => {
//   const errors = {};
//   if(!values.fullName) {
//     errors.fullName = 'Required';
//   } 
//   if(!values.score){
//     errors.score = 'Required';
//   }
//   return errors;
// }

// class renderField extends Component {
//   render() {
//     const { refField, label, placeholder, type, autoFocus, meta, input } = this.props;
//     return (
//       <div className="input-group">
//         <label className="input-group__label">{label}</label>
//         <input 
//           {...input}
//           className="text-input"
//           type={type} 
//           placeholder={placeholder}
//           autoFocus={autoFocus}
//           ref={refField}
//         />
//         {meta.touched && meta.error && <span className="form__err">{meta.error}</span>}
//       </div> 
//     );
//   } 
// }



// class AddStudentForm extends Component {

//   submitForm = (values) => {
//     this.refs.fullName.getRenderedComponent().refs.fullName.focus();
//     const { dispatch, reset } = this.props;
//     dispatch(addStudent({
//       id: uuid(),
//       ...values
//     }));
//     reset();
//   }

//   render() {
//     const { handleSubmit, submitting, pristine, dispatch, reset } = this.props;
//     return (
//       <form 
//         className="form"
//         onSubmit={handleSubmit(this.submitForm)}
//       >
//         <Field 
//           name="fullName" 
//           label="Full Name" 
//           type="text"
//           placeholder="Eg., John" 
//           component={renderField} 
//           onChange={(e, value) => {
//             if(!(!value || value.match(/^[a-zA-Z][a-zA-Z\s]*$/)))
//               e.preventDefault();
//           }} 
//           autoFocus
//           refField="fullName"
//           ref="fullName"
//           withRef={true}
//         />
//         <Field 
//           name="score" 
//           label="Score" 
//           type="text"
//           placeholder="Eg., 86" 
//           component={renderField}
//           onChange={(e, value) => {
//             if(!(!value || value.match(/^[1-9][0-9]?$|^100$/)))
//               e.preventDefault();
//           }} 
//         />
//         <button 
//           className="submit_button"
//           disabled={submitting || pristine}
//         > 
//           Submit
//         </button>
//       </form>
//     );
//   }
// }

// export default reduxForm({
//   form: 'addStudent',
//   validate
// })(AddStudentForm);






class AddStudentForm extends React.Component {
  state = {
    name: '',
    score: '',
    error: ''
  }

  handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    const name = (<HTMLInputElement>e.target).value;
    if(!name || name.match(/^[a-zA-Z][a-zA-Z\s]*$/))
      this.setState(() => ({ name }));
  }

  handleScoreChange = (e) => {
    const score = e.target.value;
    if(!score || score.match(/^[1-9][0-9]?$|^100$/))
      this.setState(() => ({ score }));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, score } = this.state;

    if(!name || !score) {
      this.setState(() => ({ error: 'Both Name and Score are required' }));
      return;
    } else {
      this.setState(() => ({ name: '', score: '', error: '' }));
      this.nameInput.focus();
      this.props.dispatch(addStudent({id: uuid(), fullName: titleCase(name.trim()), score}));
    }
  }
  
  render() {
    return (
      <div className="box">
        <form className="form" onSubmit={this.handleSubmit}>
          {this.state.error && <p className="form__err">{this.state.error}</p>}
          <div className="input-group">
            <label className="input-group__label">Name</label>
            <input 
              className="text-input"
              type="text" 
              placeholder="Eg., John"
              value={this.state.name}
              onChange={this.handleNameChange}
              ref={input => this.nameInput = input}
            />
          </div>
          <div className="input-group">
          <label className="input-group__label">Score</label>
            <input 
              className="text-input"
              type="text" 
              placeholder="Eg., 86"
              value={this.state.score}
              onChange={this.handleScoreChange}
            />
          </div>
          <button className="submit_button">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddStudentForm);