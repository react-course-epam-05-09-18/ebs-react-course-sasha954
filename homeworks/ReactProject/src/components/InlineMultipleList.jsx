import React from 'react';
import { Button, FormGroup, Label, Col } from 'reactstrap';
import PropTypes from 'prop-types';

export class InlineMultipleList extends React.Component {
  state = {
    data : {
      authors: [] 
    }
  };

componentWillReceiveProps = (nextProps) => {
  this.setState({ data : { authors : nextProps.authors } });
}

renderAuthors = (isItemSelected) => {
  const { data } = this.state;
  return data.authors.filter(elem => elem.selected === isItemSelected).map((elem, index) => 
   (<li key={elem.id} id={'item-'+elem.id} onClick={this.handleClick} className={`multi-select__item ${elem.clicked ? 'active' : ''}`}>{elem.name}</li>));
}

handleClick = ({ target }) => {
  const { data } = this.state;
  const authors = data.authors.map(elem => {
    if(this.constructId(elem.id) === target.id) {
      elem = {
        ...elem,
        clicked: !elem.clicked
      }
    }
    return elem;
  })
  this.setState({ data: { authors } });
}

constructId = id => `item-${id}`;



render() {
  const { labelValue } = this.props;
  return(

    <FormGroup row>
      <Label sm={2}>{labelValue}</Label>
      <Col sm={4}>
        <ul className='multi-select'>
          {this.renderAuthors(false)}
        </ul>
      </Col>
      <Col sm={1} className='move-btn-wrapper'>
        <Button className="custom-btn-color move-btn" onClick={() => this.props.onSelect(true, this.state)}>&raquo;</Button>
        <Button className="custom-btn-color move-btn" onClick={() => this.props.onSelect(false, this.state)}>&laquo;</Button>
      </Col> 
      <Col sm={4}>
        <ul className='multi-select' id='selected-authors'>
          {this.renderAuthors(true)}
        </ul>
      </Col>
    </FormGroup>
  );
};
}

InlineMultipleList.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  labelValue: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}