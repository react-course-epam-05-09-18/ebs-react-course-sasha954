import React from 'react';
import {FormGroup, Label, Col, Input} from 'reactstrap';
import PropTypes from 'prop-types';


export class FormElementGroup extends React.Component {

    render() {
        const {inputId, 
               inputType, 
               inputPlaceholer, 
               inputName, 
               labelValue, 
               onBlur, 
               onChange, 
               errors
              } = this.props;
        return(
            <FormGroup row>
                <Label for={inputId} sm={2}>{labelValue}</Label>
                <Col sm={10}>
                    <Input type={inputType} 
                    name={inputName} 
                    onBlur={onBlur} 
                    className={errors && 'is-invalid'} 
                    id={inputId} 
                    onChange={onChange}
                    placeholder={inputPlaceholer}/>
                    {errors && <div className="invalid-feedback">Put {errors}.</div>}
                </Col>
            </FormGroup>
        );
    };
}


FormElementGroup.propTypes = {
    inputId: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    inputPlaceholer : PropTypes.string,
    labelValue: PropTypes.string.isRequired
}