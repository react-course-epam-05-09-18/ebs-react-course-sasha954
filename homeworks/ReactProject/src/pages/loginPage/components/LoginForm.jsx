import React from 'react'
import {Button, Form} from 'reactstrap';
import {FormElementGroup} from '../../../components/FormElementGroup';

export class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: this.props.login,
            password: this.props.password,
            errors: {},
            submitForm : this.props.onSubmitForm,
            onChangeHandler: this.props.onChangeHandler,
        }
        this.onBlur = this.onBlur.bind(this);
    }
    
    onBlur(e) {
        const isEmpty = e.target.value.length === 0;
        
        if(isEmpty) {
            const errors = {
                [e.target.name]: e.target.name
            }
            
            this.setState({
                errors: errors
            })
            
        } else {
             this.setState({
                errors: {}
            });
        }
        
    }
    

    render() {
        const {errors, login, password, submitForm, onChangeHandler} = this.state;
        return (<React.Fragment>
            {this.isAuthenticated() 
                    ? <Redirect to={{pathname: '/courses'}}/> 
                    :(<Form onSubmit={submitForm}>
                        <FormElementGroup 
                        inputId="login"
                        inputName="login" 
                        inputType="text"
                        inputPlaceholer="Enter your login!" 
                        labelValue="Login*"
                        value={login}
                        errors={errors.login} 
                        onBlur={this.onBlur}
                        onChange={onChangeHandler}
                        />

                        <FormElementGroup inputId='password' 
                        inputName="password"  
                        inputType="password" 
                        inputPlaceholer="Enter your password!" 
                        labelValue="Password*"
                        value={password}
                        errors={errors.password} 
                        onBlur={this.onBlur}
                        onChange={onChangeHandler}/>
                        <Button className="custom-btn-color" type="submit">Sign in</Button>
                    </Form>)}
            </React.Fragment>
        );
    };
}


