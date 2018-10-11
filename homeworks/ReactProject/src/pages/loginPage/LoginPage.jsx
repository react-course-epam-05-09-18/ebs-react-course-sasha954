import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'reactstrap';
import { LoginForm } from './components/LoginForm';
import { connect } from 'react-redux';
import { login } from '../../actions/auth'


class LoginPageComponent extends React.Component {
    
    submit = data => this.props.login(data).then(() => this.props.history.push('/courses')); 
        
    render() {
        return(
           <Container>
             <Row>
                 <Col sm={{size:8, offset:2}}>
                     <LoginForm submit={this.submit} />
                 </Col>
               </Row>
           </Container>
        );
    }
}

LoginPageComponent.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
}

export const LoginPage = connect(null, { login })(LoginPageComponent);