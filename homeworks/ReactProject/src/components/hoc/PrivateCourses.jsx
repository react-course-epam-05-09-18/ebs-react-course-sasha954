import React from 'react';

export default (Component) => {
    class Authenticated extends React.Component {
        
        state = {
            isAuthenticated: false
        }
            
        isAuthenticated = () => {
            const token = localStorage.getItem('token');
            return token !== null && token.length > 10;
        }
        
        componentWillMount() {
            this.setState({
                isAuthenticated: this.isAuthenticated()
            }, () => {
                 if(!this.state.isAuthenticated) {
                    this.props.history.push('/login')
                }
            });
           
        }
        
        componentWillUpdate(nextProps) {
          if (!nextProps.isAuthenticated) {
            this.props.history.push('/courses')
          }
        }

        
        render() {
            return <Component {...this.props}/>
        }
    }
        
    return Authenticated;
} 