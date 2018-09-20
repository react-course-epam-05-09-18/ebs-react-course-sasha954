import React from 'react'
import {withState, withHandlers, compose} from 'recompose';

import {CourseItem} from './CourseItem'

export class CourseItemListComponent extends React.Component {
    
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
    
const coursesFromStorage = compose(
  withState('setCourses', 'setCoursesState', ''),
  withHandlers({
    setCourses: (state) => () => state.setCoursesState(state.getCourses),
  })
);
      
export const CourseItemList = coursesFromStorage(CourseItemListComponent);