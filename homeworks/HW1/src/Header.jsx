import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Switch} from 'react-router';
import {Container, Col,  Row} from 'reactstrap';

import LoginPage from './LoginPage'
import CoursesPage from './CoursesPage'
import CourseManipulatePage from './CourseManipulatePage'

import './styles/header.css'

import logo from './logo.svg'

class Navigation extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Container fluid={true}>
                    <Row className="headerMenu">
                       <Col sm={{size:9, offset: 2}}>
                            <ul className="menu">
                                <li className="menu__item"><Link to="/login">Login</Link></li>
                                <li className="menu__item"><Link to="/courses">Courses</Link></li>
                            </ul>
                        </Col>                   
                    </Row>
                    <Row className="header">
                        <Col sm={{size:1, offset: 2}}> 
                            <img src={logo} className="logo" alt="logo"/>
                       </Col>
                        <Col sm={3} className="header__title"><h2>Courses</h2></Col>
                    </Row>
                    <Switch>
                        <Route exact path="/" component={CoursesPage}/>
                        <Route exact path="/login" component={LoginPage}/>
                        <Route exact path="/courses" component={CoursesPage}/>
                        <Route exact path="/courses/add" component={CourseManipulatePage}/>
                        <Route exact path="/courses/:id" component={CourseManipulatePage}/>
                    </Switch>
               </Container>
            </BrowserRouter>           
        )
    }
}

export default Navigation;