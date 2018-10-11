import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Col, Input } from 'reactstrap';

export class DurationInputComponent extends React.Component {
  
  
  render() {
    const { errors, onChange, durationValue } = this.props;
    return(
      <FormGroup className="vertical-center" row>
        <Label for='duration_minutes' sm={2}>Duration</Label>
        <Col sm={5}>
          <Input type='number' 
            name='duration_minutes' 
            className={errors && 'is-invalid'} 
            id='duration_minutes' 
            onChange={onChange}
            placeholder="Duration"/>
          {errors && <div className="invalid-feedback">{errors}.</div>}
        </Col>
        <Col sm={5}>
          <Input name='duration' className="duration" disabled value={durationValue}/>
        </Col>
      </FormGroup>
    );
  };
}

DurationInputComponent.propTypes = {
  durationValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.string
}