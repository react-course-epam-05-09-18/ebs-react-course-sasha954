import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { Container, Col,  Row } from 'reactstrap';
import { Breadcrumbs } from '../breadcrumbs/Breadcrumbs'
import { connect } from 'react-redux'
import * as actions from '../../actions/auth'

import './styles/header.css'
import '../breadcrumbs/style/breadcrumbs.css'
import logo from '../../logo.svg'

export const HeaderComponent = ({ isAuthenticated, logout }) => {
   return(
      <Container fluid={true}>
        <Row className="headerMenu">
          <Col sm={{size:9, offset: 2}}>
            <ul className="menu">
              <li className="menu__item"><Link to="/courses">Courses</Link></li>
              <li className="menu__item">{!isAuthenticated ? <Link to="/login">Login</Link> : <button className="btn-header-link" onClick={() => logout()}>Logout</button>}</li>
            </ul>
          </Col>                   
        </Row>
        <Row className="header">
          <Col sm={{size:1, offset: 2}}> 
            <img src={logo} className="logo" alt="logo"/>
          </Col>
          <Col sm={3} className="header__title"><h2>Courses</h2></Col>
          <Breadcrumbs/>
        </Row>
      </Container>

    )
}

HeaderComponent.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.user.token
  }
}

export const Header = connect(mapStateToProps, { logout: actions.logout })(HeaderComponent);
