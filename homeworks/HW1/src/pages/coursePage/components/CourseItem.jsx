import React from 'react';
import {Row, Col} from 'reactstrap'
import {CourseButton} from './CourseButton'
import {Title} from './Title';

import {Content} from './Content'


export class CourseItem extends React.Component {
    
    render() {
        return(
            <Row className="courses-item">
               <Col sm={10} className="courses-item__content">
                    <Title label={this.props.titleLabel} duration={this.props.courseDuration} courseDate={this.props.courseDate}/>
                    <Content content={this.props.content}/>
                </Col>
                <Col sm={2} className="course-btn-wrapper">
                    <CourseButton btnLabel="Edit course"/>
                    <CourseButton btnLabel="Delete course"/>
                </Col>
            </Row>
        );
    }
}