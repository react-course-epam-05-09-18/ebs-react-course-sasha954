import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { CreateCourseForm } from './component/CreateCourseForm';
import { connect } from 'react-redux';
import { createCourse } from '../../actions/courses';
import { fetchAuthors } from '../../actions/authors';
import { allAuthorsSelector } from '../../selectors/authorsSelector';


export class CourseManipulatePageComponent extends React.Component {
  
  componentDidMount = () => this.onInit(this.props);
  
  onInit = (props) => props.fetchAuthors();
  
  submit = data => this.props.createCourse(data).then(() => this.props.history.push('/courses'))
    
    render() {
      const { authors } = this.props;
        return(
            <Container>
                <Row className="justify-content-center">
                    <Col sm={8}>
                       <CreateCourseForm authors={ authors } submit={ this.submit } />
                    </Col>
                </Row>
            </Container>
        )
    } 
}

CourseManipulatePageComponent.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  createCourse: PropTypes.func.isRequired,
  fetchAuthors: PropTypes.func.isRequired,
  authors : PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    clicked: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired
  }).isRequired).isRequired
}

const mapStateToProps = (state) => {
  return {
    authors: allAuthorsSelector(state)
  }
}

export const CourseManipulatePage = connect(mapStateToProps, { createCourse, fetchAuthors })(CourseManipulatePageComponent);