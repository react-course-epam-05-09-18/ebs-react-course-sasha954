import React from 'react';
import {Container, Col, Row} from 'reactstrap';
import {LoginForm} from './components/LoginForm';
import {Redirect} from 'react-router-dom';


export class LoginPage extends React.Component {
    
    state = {
        login: '',
        password: ''
    }
    
    onSubmitForm = (e) => {
          e.preventDefault();
        
        const userData = {
            user: this.state.login,
            password: this.state.password
        }
        
        fetch('https://flatearth-api.herokuapp.com/api/v1/auth/login', {
            headers: { 
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(userData)})
            .then((response) => {
                if(!response.ok) {
                    throw Error(response.statusText)
                }
                return response.json()
            })
            .then((response) => {
                localStorage.setItem('token', response.message.token);
                localStorage.setItem('user', JSON.stringify(response.message.user));
                this.setState({
                    isAuthenticated : this.isAuthenticated()
                });
            }).catch((err) => console.log(err));
    }
    
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
        
    }
    
    
    isAuthenticated = () => {
        const token = localStorage.getItem('token');
        return token !== null && token.length > 10;
    }
    
    render() {
        const isAuth = this.state.isAuthenticated;
        return(
           <Container>
             <Row>
                 <Col sm={{size:8, offset:2}}>
                     { isAuth 
                         ? <Redirect to={{pathname:'/courses'}}/> 
                         : <LoginForm onChangeHandler={this.onChangeHandler} isAuth={this.isAuthenticated} onSubmitForm={this.onSubmitForm} />}
                 </Col>
               </Row>
           </Container>
        );
    }
}