import React from 'react';
import {Container, Row, Col, Form, Button} from 'reactstrap';
import {FormElementGroup} from '../../components/FormElementGroup';
import {InlineMultipleList} from '../../components/InlineMultipleList';

export class CourseManipulatePage extends React.Component {
    
    render() {
        return(
            <Container>
                <Row className="justify-content-center">
                    <Col sm={8}>
                        <Form>
                            <FormElementGroup inputId="course-name" inputName="courseName" inputType="text" inputPlaceholer="Course name" labelValue="Course name"/>
                            <FormElementGroup inputId="description" inputName="description" inputType="textarea" inputPlaceholer="Description" labelValue="Description"/>
                            <FormElementGroup inputId="date" inputName="date" inputType="date" inputPlaceholer="" labelValue="Date"/>
                            <FormElementGroup inputId="duration" inputName="duration" inputType="number" inputPlaceholer="Duration" labelValue="Duration"/>
                            <InlineMultipleList inputId="authors" inputName="authors" labelValue="Authors"/>
                            <Row className="justify-content-evenly mt-5">
                            <Button  className="custom-btn-color col-sm-3"  type="submit">Save</Button>
                            <Button  className="custom-btn-color col-sm-3"  type="reset">Reset</Button>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    } 
}