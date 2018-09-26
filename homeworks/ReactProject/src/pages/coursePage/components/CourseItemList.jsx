import React from 'react';
import PropTypes from 'prop-types';

import {CourseItem} from './CourseItem';

export class CourseItemList extends React.Component {
    
    renderCourses = () => {
        return this.props.courses.map((elem,index) => <CourseItem key={index} element={elem}/>); 
    }
                           
    render() {
        return(
            <React.Fragment>
                {this.renderCourses()}
            </React.Fragment>
        );
    };
}
    
CourseItemList.propTypes = {
    courses: PropTypes.array.isRequired
}