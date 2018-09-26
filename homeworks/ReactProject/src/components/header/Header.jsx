import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Col,  Row} from 'reactstrap';
import './styles/header.css'
import logo from '../../logo.svg'

export class Header extends React.Component {
    render() {
        return(
            
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
               </Container>
                      
        )
    }
}