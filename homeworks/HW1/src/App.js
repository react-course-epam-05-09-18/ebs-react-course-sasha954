import React from 'react'

import Header from './Header'
import Footer from './Footer'

class Navigation extends React.Component {
    render() {
        return(
            <div className="body">
                <Header/>   
                <Footer/>   
            </div>
        )
    }
}

export default Navigation;