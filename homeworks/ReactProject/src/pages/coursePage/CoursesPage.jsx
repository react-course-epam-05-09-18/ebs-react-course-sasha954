import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'reactstrap';

import { SearchBar } from './components/SearchBar';
import { CourseItemList } from './components/CourseItemList';
import { connect } from 'react-redux'; 
import { fetchCourses } from '../../actions/courses';
import { allCoursesSelector } from '../../selectors/coursesSelector'

import './styles/course-page.css'

export class CoursesPageComponent extends React.Component {

  componentDidMount = () => this.onInit(this.props);

  onInit = props => props.fetchCourses();

  render() {
    const { courses } = this.props;
    return(
      <Container>
        <SearchBar/>
        <Row>
          {<CourseItemList courses={courses}/>}
        </Row>
      </Container>
    )
  }
}

CoursesPageComponent.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired).isRequired,
  fetchCourses: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  console.log(state,'-------------');
  return {
    courses: allCoursesSelector(state)
  }
}
export const CoursesPage = connect(mapStateToProps, { fetchCourses })(CoursesPageComponent)