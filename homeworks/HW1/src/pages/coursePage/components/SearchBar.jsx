import React from 'react';
import {Row, Col, Form, FormGroup, Input, Button} from 'reactstrap'
import {CourseButton} from './CourseButton'

export class SearchBar extends React.Component {
    render() {
        return(
            <Row className="search-form">
                <Col sm={8}>
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 custom-form-group">
                            <Input type="text" name="search" id="search_query" placeholder="Enter date or part of name..."/>
                        </FormGroup>
                        <Button className="custom-btn-color">Search</Button>
                    </Form>
                </Col>
                <Col sm={{size: 2, offset: 2}}>
                    <CourseButton btnUrl="/courses/add"/>
                </Col>
            </Row>
        );
    }
}