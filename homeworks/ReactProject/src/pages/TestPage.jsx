import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Row, Col, Label, FormGroup, Button } from 'reactstrap';
import { fetchAuthors } from '../actions/authors';
import { allAuthorsSelector } from '../selectors/authorsSelector';

export class TestPageComponent extends React.Component {
  
  componentDidMount = () => this.onInit(this.props);
  
  onInit = props => props.fetchAuthors();

  render() {
    const { authors } = this.props;
    console.log(this.props);
    return(
      <div><MultiSelect authors={authors}/></div>
    );
  };
}


TestPageComponent.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  fetchAuthors: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    authors: allAuthorsSelector(state)
  }
}
export const TestPage = connect(mapStateToProps, { fetchAuthors })(TestPageComponent)

export class MultiSelect extends React.Component {
  
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

 /* selectItems = (shouldChoose) => {
    const { data } = this.state;
    const authors = data.authors.map(elem => {
      if(elem.clicked) {
        elem = {
          ...elem,
          clicked: false,
          selected: shouldChoose
        }
      }
      return elem;
    })
    this.setState({ data: { authors } });
  }*/

  render() {
    return(
      <Container> 
        <Row className="justify-content-center">
          <Col sm={8}>
            <FormGroup row>
              <Label sm={2}>Authors</Label>
              <Col sm={4}>
                <ul className='multi-select'>
                  {this.renderAuthors(false)}
                </ul>
              </Col>
              <Col sm={1} className='move-btn-wrapper'>
                <Button className="custom-btn-color move-btn">&raquo;</Button>
                <Button className="custom-btn-color move-btn">&laquo;</Button>
              </Col> 
              <Col sm={4}>
                <ul className='multi-select' id='selected-authors'>
                  {this.renderAuthors(true)}
                </ul>
              </Col>
            </FormGroup>
          </Col>
        </Row>
      </Container>
    );
  };
}
MultiSelect.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}