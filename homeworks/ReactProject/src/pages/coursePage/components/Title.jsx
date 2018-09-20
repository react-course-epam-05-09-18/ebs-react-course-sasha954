import React from 'react';
import PropTypes from 'prop-types';

import '../styles/course-page.css'

export class Title extends React.Component {
    render() {
         const {
                label,
                duration,
                courseDate
            } = this.props;
        return(            
            <header className="course-item__header">
                <h3 title={label}>{label}</h3>
                <h4 className="duration-title fz-1_2rem">{duration}</h4>
                <h4 className="course-date fz-1_2rem">{courseDate}</h4>
            </header>
        );
    }
}

Title.propTypes = {
    label: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    courseDate: PropTypes.string.isRequired,
}