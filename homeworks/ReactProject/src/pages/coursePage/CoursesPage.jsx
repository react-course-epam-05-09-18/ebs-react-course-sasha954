import React from 'react';
import {Container, Row} from 'reactstrap';

import {SearchBar} from './components/SearchBar'
import {CourseItemList} from './components/CourseItemList'

import './styles/course-page.css'

export class CoursesPage extends React.Component {
   
    render() {
        const {courses} = this.props;
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