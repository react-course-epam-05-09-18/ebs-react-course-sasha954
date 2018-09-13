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

export class InlineMultipleList extends React.Component {
    constructor(props) {
        super(props);
        const allItems = ['one', 'two', 'three', 'four', 'five'];
        const selectedItems = [];
        this.state = {
            items: allItems.sort(),
            selected: selectedItems,
            chosenElemItems: null,
            chosenElemSelected: null
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    renderSelectedItem = () => {
        const selectedItem = this.state.selected;
        return selectedItem.map((elem, index) => <option key={elem} onClick={this.selectFromSelectedItems}>{elem}</option>);
    }
    
    renderAllItem = () => {
        const allItems = this.state.items;
        return allItems.map((elem, index) => <option key={elem} onClick={this.selectFromItems}>{elem}</option>);
    }
                            
    selectFromItems = (e) => {
        const itemValue = e.target.value;
            
        this.setState({
            chosenElemItems: itemValue
        });
    }
        
     selectFromSelectedItems = (e) => {
        const itemValue = e.target.value;
            
        this.setState({
            chosenElemSelected: itemValue
        });
    }   
          
    moveToSelectedItem = () => {
        const elem = this.state.chosenElemItems;
        const to = this.state.selected;
        const from = this.state.items;
        if(elem !== null) {
            this.removeFromArray(from, elem);

            to.push(elem);
            this.setListState(from, to)
           
        }
    }
   
     moveFromSelectedItem = () => {
        const elem = this.state.chosenElemSelected;
        const from = this.state.selected;
        const to = this.state.items;
        if(elem !== null) {
            this.removeFromArray(from, elem);

            to.push(elem);
            this.setListState(to, from)  
        }
    }
    
    
    setListState = (letfArray, rightArray) => {
         this.setState({
            selected: rightArray.sort(),
            items: letfArray.sort(),
            chosenElemItems: null,
            chosenElemSelected: null
        });
    }
    
   removeFromArray = (array, elem) => {
        const position = array.indexOf(elem)
        array.splice(position, 1);  
   } 
   
    render() {
        const btnMarginStyle = {
            margin: "5px 0"
        };
        const {
            inputId,
            labelValue,
            inputName
        } = this.props;
        return (<FormGroup row>
            <Label for={inputId} sm={2}>{labelValue}</Label>
            <Col sm={5}>
                <Input type="select" id={inputId} multiple>
                    {this.renderAllItem()}
                </Input>
            </Col>
            <Col sm={1}>
                <Button className="custom-btn-color" onClick={this.moveToSelectedItem} style={btnMarginStyle}>&raquo;</Button>
                <Button className="custom-btn-color" onClick={this.moveFromSelectedItem} style={btnMarginStyle}>&laquo;</Button>
            </Col>
            <Col sm={4}>
            <Input type="select" value={this.state.selected} onChange={this.handleChange} name={inputName} id={inputId} multiple>
                {this.renderSelectedItem()}
            </Input>
            </Col>
        </FormGroup>)
    }
}

FormElementGroup.propTypes = {
    inputId: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    inputPlaceholer : PropTypes.string,
    labelValue: PropTypes.string.isRequired
}