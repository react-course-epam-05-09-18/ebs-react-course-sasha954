import React from 'react';
import {Container, Row} from 'reactstrap';


import {SearchBar} from './components/SearchBar'
import {CourseItemList} from './components/CourseItemList'

import './styles/course-page.css'

export class CoursesPage extends React.Component {
    state = {
        courses: []
    }
    
    componentWillMount() {
        this.getCourses();
      
    }

    getCourses = () => {
        fetch('http://10.23.12.216:8081/api/courses')
            .then((response) => {
                if(!response.ok) {
                    throw Error(response.statusText)
                }
                return response.json()
            })
            .then((response) => {
                 this.setState({
                    courses : response
                });
            }).catch((err) => console.log(err));       
    }
    
    
   
    render() {
        const {courses} = this.state;
        return(
            <Container>
                <SearchBar/>
                <Row>
                   {<CourseItemList courses={courses} getCourses={this.getCourses}/>}
                </Row>
            </Container>
        )
    }
}
