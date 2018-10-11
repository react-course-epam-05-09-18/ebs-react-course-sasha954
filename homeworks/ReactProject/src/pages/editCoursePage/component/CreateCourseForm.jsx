import React from 'react';
import PropTypes from 'prop-types';
import { Row, Form, Button } from 'reactstrap';

import { FormElementGroup } from '../../../components/FormElementGroup';
import { InlineMultipleList } from '../../../components/InlineMultipleList';
import { DurationInputComponent } from '../../../components/DurationInputComponent';

export class CreateCourseForm extends React.Component {
  
  state = {
    data: {
      title: '',
      duration: '00h 00m',
      content: '',
      date: new Date(),
      authors: []
    },
    authorList: [],
    errors: {} 
  }
  
  handleChange = ({ target }) => {
    this.setState({ data: { ...this.state.data, [target.name] : target.value }});
  } 
  
  handleDurationChange = ({ target }) => {
    const duration = this.convertMinutsToHours(target.value);
    this.setState({ data : { ...this.state.data, duration }});
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err => this.setState({ errors: { message : err.response.data.data } }));
    }
  } 

  validate = data => {
    const errors = {};
    
    if (!data.title) errors.title = "Can't be blank";
    if (!data.duration) errors.duration = "Can't be blank";
    if (!data.content) errors.content = "Can't be blank";
    if (!data.date) errors.date = "Can't be blank";
    
    return errors;
  };
  
  handleSelect = (shouldChoose, state) => {
    const { data } = state;
    const authorList = data.authors.map(elem => {
      if(elem.clicked) {
        elem = {
          ...elem,
          clicked: false,
          selected: shouldChoose
        }
      }
      return elem;
    });
    const authors = authorList.filter(elem => elem.selected).map(elem => elem.id);
    this.setState({ data: { ...this.state.data, authors }, authorList });
  }

    
  convertMinutsToHours = min => {
    const duration = parseInt(min, 10);
    const hour = parseInt(duration / 60, 10);
    const minutes = parseInt(duration % 60, 10);

    return duration ? `${this.pad2(hour)}h ${this.pad2(minutes)}m` : '00h 00m';
  }
  
  pad2 = num => {
    return (num < 10 ? '0' : '') + num;
  }
  
  componentWillReceiveProps = (nextProps) => {
    this.setState({ authorList: nextProps.authors });
  }
  
  render() {
    const { data, errors, authorList } = this.state;
    return ( 
      <Form onSubmit={this.handleSubmit}>
        <FormElementGroup inputId = "course-name"
        inputName = "title"
        inputType = "text"
        inputPlaceholer = "Course name"
        onChange={ this.handleChange }
        value={ data.title }
        errors={ errors.title }
        labelValue = "Course name" />
        <FormElementGroup inputId = "description"
        inputName = "content"
        inputType = "textarea"
        inputPlaceholer = "Description"
        onChange={ this.handleChange }
        value={ data.content }
        errors={ errors.content }
        labelValue = "Description" />
        <FormElementGroup inputId = "date"
        inputName = "date"
        inputType = "date"
        onChange={ this.handleChange }
        value={ data.date }
        errors={ errors.date }
        inputPlaceholer = ""
        labelValue = "Date" />
        <DurationInputComponent 
        errors={errors.duration} 
        onChange={this.handleDurationChange}
        durationValue={data.duration}  />
        <InlineMultipleList 
        authors={authorList}
        onSelect={this.handleSelect}
        labelValue = "Authors" />
        <Row className = "justify-content-evenly mt-5" >
          <Button className = "custom-btn-color col-sm-3" type = "submit"> Save </Button> 
          <Button className = "custom-btn-color col-sm-3" type = "reset"> Reset </Button> 
        </Row> 
      </Form>
    );
  };
}

CreateCourseForm.propTypes = {
  submit: PropTypes.func.isRequired
};

