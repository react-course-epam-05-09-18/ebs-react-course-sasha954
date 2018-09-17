import React from 'react';
import PropTypes from 'prop-types';

import '../styles/course-page.css'

export class Content extends React.Component {
    render() {
     return(
        <div className="content">
            <p>{this.props.content}</p>
        </div>)
    }
}

Content.propTypes = {
    content: PropTypes.string
}