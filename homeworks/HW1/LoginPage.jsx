import React from 'react';
import {Button, Form, FormGroup, Label, Col, Input} from 'reactstrap';

class LoginPage extends React.Component {
    render() {
        return(
           <div className="container">
              <Form>
                   <FormGroup row>
                       <Label for="email" sm={2}>Email*</Label>
                       <Col sm={10}>
                           <Input type="email" name="email" id="email" placeholder="with a placeholder" />
                       </Col>
                   </FormGroup>
                   <FormGroup row>
                       <Label for="password" sm={2}>Password*</Label>
                       <Col sm={10}>
                           <Input type="password" name="password" id="password" placeholder="with a placeholder" />
                       </Col>
                   </FormGroup>
               </Form>
           </div>
        );
    }
}

export default LoginPage;