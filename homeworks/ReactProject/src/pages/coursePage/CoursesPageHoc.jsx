import React from 'react';
import {CoursesPage} from './CoursesPage'

export const CoursesPageHoc = (Page) => {
    class PageWithData extends React.Component {
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
        
        render(){
            return(<Page courses={this.state.courses}/>)
        }
    }
    
    return PageWithData;
}

export const CoursesPageWithData = CoursesPageHoc(CoursesPage);