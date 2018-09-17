import React from 'react';
import {FormGroup, Label, Col, Input} from 'reactstrap';
import PropTypes from 'prop-types';

export const FormElementGroup = (props) => {
    return (<FormGroup row>
               <Label for={props.inputId} sm={2}>{props.labelValue}</Label>
               <Col sm={10}>
                   <Input type={props.inputType} name={props.inputName} id={props.inputId} placeholder={props.inputPlaceholer} />
               </Col>
           </FormGroup>);
}

FormElementGroup.propTypes = {
    inputId: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    inputPlaceholer : PropTypes.string,
    labelValue: PropTypes.string.isRequired
}