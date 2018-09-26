import React from 'react';
import {Row, Col} from 'reactstrap'
import {CourseButton} from './CourseButton'
import {SearchForm} from './SearchForm'

export class SearchBar extends React.Component {
    render() {
        return(
            <Row className="search-form">
                <Col sm={8}>
                    <SearchForm />
                </Col>
                <Col sm={{size: 2, offset: 2}}>
                    <CourseButton btnUrl="/courses/add"/>
                </Col>
            </Row>
        );
    }
}