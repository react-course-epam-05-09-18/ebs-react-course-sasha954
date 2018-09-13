import React from 'react';
import {Button, FormGroup, Label, Col, Input} from 'reactstrap';
import PropTypes from 'prop-types';

export const FormElementGroup = (props) => {
    return (<FormGroup row>
               <Label for={props.inputId} sm={2}>{props.labelValue}</Label>
               <Col sm={10}>
                   <Input type={props.inputType} name={props.inputName} id={props.inputId} placeholder={props.inputPlaceholer} />
               </Col>
           </FormGroup>);
}

export const InlineMultipleList = (props) => {
    const btnMarginStyle = {
        margin: "5px 0"
    }
    return (<FormGroup row>
                <Label for={props.inputId} sm={2}>{props.labelValue}</Label>
                <Col sm={5}>
                    <Input type="select" name={props.inputName} id={props.inputId} multiple>
                        <option>1</option>
                        <option>3</option>
                    </Input>
                </Col>
                <Col sm={1}>
                    <Button className="custom-btn-color" style={btnMarginStyle}>&raquo;</Button>{' '}
                    <Button className="custom-btn-color" style={btnMarginStyle}>&laquo;</Button>{' '}
                </Col>
                <Col sm={4}>
                    <Input type="select" name={props.inputName} id={props.inputId} multiple>
                        <option>2</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </Col>
            </FormGroup>)
}

FormElementGroup.propTypes = {
    inputId: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    inputPlaceholer : PropTypes.string,
    labelValue: PropTypes.string.isRequired
}