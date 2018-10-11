import React from 'react'

export const asyncComponent = (getComponent) => {
  class AsyncComponentWrapper extends React.Component {
    static Component = null;
    state = {
      Component : AsyncComponentWrapper.Component
    }

    componentWillMount() {
      if(!this.state.Component) {
        getComponent().then(Component => {
          AsyncComponentWrapper.Component = Component;
          this.setState({
            Component    
          });
        })
      }
    }


    render() {

      const {Component} = this.state;
      return Component ? <Component {...this.props} /> : null;
    }
  }

  return AsyncComponentWrapper;
}
