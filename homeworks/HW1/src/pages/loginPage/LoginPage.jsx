import React from 'react';
import {Container, Button, Form, Col, Row} from 'reactstrap';
import {FormElementGroup} from '../../components/FormElementGroup';

export class LoginPage extends React.Component {
    render() {
        return(
           <Container>
             <Row>
                 <Col sm={{size:8, offset:2}}>
                  <Form>
                       <FormElementGroup inputId='email' inputName='email' inputType='email' inputPlaceholer="Enter your email!" labelValue="Email*" />
                       <FormElementGroup inputId='password' inputName="password" inputType="password" inputPlaceholer="Enter your password!" labelValue="Password*"/>
                       <Button className="custom-btn-color" type="submit">Sign in</Button>
                   </Form>
                 </Col>
               </Row>
           </Container>
        );
    }
}