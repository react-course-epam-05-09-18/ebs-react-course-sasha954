import React from 'react';
import PropTypes from 'prop-types';
import {Container, Col, Row, Form, FormGroup, Input, Button} from 'reactstrap';
import './styles/course-page.css'

const CourseButton = (props) => <a href="/courses/add" className={props.btnClassName}>{props.btnLabel}</a>;

const Title = (props) => {
    return (
        <header className="course-item__header">
        <h3 title={props.label}>{props.label}</h3>
        <h4 className="duration-title fz-1_2rem">{props.duration}</h4>
        <h4 className="course-date fz-1_2rem">{props.courseDate}</h4>
        </header>
    );
}

const Content = (props) => {
    return(
        <div className="content">
            <p>{props.content}</p>
        </div>
    )
}

class SearchBar extends React.Component {
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
                    <CourseButton/>
                </Col>
            </Row>
        );
    }
}

class CourseItem extends React.Component {
    
    render() {
        console.log(this.props);
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

export default class CoursesPage extends React.Component {
    
    constructor(props) {
        super(props);
        const courses = [{
            title : "What is Lorem Ipsum?",
            duration : "10m",
            date : "10.02.2019",
            content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }, {
            title : "What is Lorem Ipsum?13123123",
            duration : "10m",
            date : "10.02.2019",
            content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }];
        this.state = {coures: courses};
    }
    
    getCourses = () => {
        console.log(this.state);
        return this.state.coures.map((elem,index) => <CourseItem titleLabel={elem.title} courseDuration={elem.duration} courseDate={elem.date} content={elem.content}/>);
    }
    
    render() {
       console.log(this.state.coures.title);
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

Content.propTypes = {
    content: PropTypes.string.isRequired
}

Title.propTypes = {
    label: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    courseDate: PropTypes.string.isRequired,
}

CourseButton.propTypes = {
    btnClassName : PropTypes.string.isRequired,
    btnLabel : PropTypes.string.isRequired
};

CourseButton.defaultProps = {
    btnClassName: "course-btn",
    btnLabel: "+ Add course"
}