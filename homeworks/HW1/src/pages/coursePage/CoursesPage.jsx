import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row} from 'reactstrap';


import {SearchBar} from './components/SearchBar'
import {CourseItem} from './components/CourseItem'

import './styles/course-page.css'

export class CoursesPage extends React.Component {
    
    getCourses = () => {
        const courses = [{
            title : "What is Lorem Ipsum?",
            duration : "10m",
            date : "10.02.2019",
            content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }, {
            title : "What is Lorem Ipsum?",
            duration : "1h 20m",
            date : "10.02.2019",
            content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }];
        return courses.map((elem,index) => <CourseItem key={index} titleLabel={elem.title} courseDuration={elem.duration} courseDate={elem.date} content={elem.content}/>);
    }
    
    render() {
        return(
            <Container>
                <SearchBar/>
                <Row>
                   {this.getCourses()}
                </Row>
            </Container>
        )
    }
}

CourseItem.propTypes = {
    titleLabel: PropTypes.string.isRequired,
    courseDuration: PropTypes.string.isRequired,
    courseDate: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

