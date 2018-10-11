import React from 'react';
import PropTypes from 'prop-types';

import '../styles/course-page.css'

export class CourseButton extends React.Component {
    render() {
        const {
            btnClassName,
            btnLabel,
            btnUrl
        } = this.props;
        
        return <a href={btnUrl} className={btnClassName}>{btnLabel}</a>;
    }
}


CourseButton.propTypes = {
    btnClassName : PropTypes.string.isRequired,
    btnLabel : PropTypes.string.isRequired,
    btnUrl : PropTypes.string.isRequired
}

CourseButton.defaultProps = {
    btnClassName: "course-btn",
    btnLabel: "+ Add course",
    btnUrl : "#"
}