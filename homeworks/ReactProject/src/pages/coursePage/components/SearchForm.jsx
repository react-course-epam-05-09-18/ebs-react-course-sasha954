import React from 'react'
import {Form, FormGroup, Input, Button} from 'reactstrap'
import PropTypes from 'prop-types';

export class SearchForm extends React.Component {
    render() {
        const {method, action} = this.props;
        return(
            <Form method={method} action={action} inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0 custom-form-group">
                    <Input type="text" name="search" id="search_query" placeholder="Enter date or part of name..."/>
                </FormGroup>
                <Button className="custom-btn-color">Search</Button>
            </Form>
        );
    };
}

SearchForm.propTypes = {
    method : PropTypes.string,
    action : PropTypes.string
};

SearchForm.defaultProps = {
    method : "post",
    action : ""
}