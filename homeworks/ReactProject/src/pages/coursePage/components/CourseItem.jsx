import React from 'react';
import {Row, Col} from 'reactstrap'
import PropTypes from 'prop-types';

import {CourseButton} from './CourseButton'
import {Title} from './Title';
import {Content} from './Content'


export class CourseItem extends React.Component {
    
    render() {
        const course = this.props.element;
        return(
            <Row className="courses-item">
               <Col sm={10} className="courses-item__content">
                    <Title label={course.title} duration={course.duration} courseDate={course.date}/>
                    <Content>{course.content}</Content>
                </Col>
                <Col sm={2} className="course-btn-wrapper">
                    <CourseButton btnLabel="Edit course"/>
                    <CourseButton btnLabel="Delete course"/>
                </Col>
            </Row>
        );
    }
}

CourseItem.propTypes = {
   element: PropTypes.object.isRequired
}