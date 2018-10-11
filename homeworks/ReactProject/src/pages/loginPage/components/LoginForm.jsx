import React from 'react'
import PropTypes from 'prop-types';
import { Button, Form, Alert } from 'reactstrap';

import { FormElementGroup } from '../../../components/FormElementGroup';

export class LoginForm extends React.Component { 

  state = {
    data: {
      login: '',
      password: ''
    },
    errors: {}
  }

  handleChange = ({ target }) => {
    this.setState({ data: { ...this.state.data, [target.name]  : target.value }});
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
    if (!data.login) errors.login = "Can't be blank";
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  };

render() {
  const { data, errors } = this.state;

  return (<React.Fragment>
      <Form onSubmit={this.handleSubmit}>
        {errors.message &&  <Alert color="danger">
          {errors.message}
        </Alert>}
        <FormElementGroup 
          inputId="login"
          inputName="login" 
          inputType="text"
          inputPlaceholer="Enter your login!" 
          labelValue="Login*"
          value={data.login}
          errors={errors.login} 
          onChange={this.handleChange}
          />

        <FormElementGroup inputId='password' 
          inputName="password"  
          inputType="password" 
          inputPlaceholer="Enter your password!" 
          labelValue="Password*"
          value={data.password}
          errors={errors.password} 
          onChange={this.handleChange}/>
        <Button className="custom-btn-color" type="submit">Sign in</Button>
      </Form>
    </React.Fragment>
  );
}
};

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};