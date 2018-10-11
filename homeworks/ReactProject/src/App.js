/*jshint esnext: true */

import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {Header} from './components/header/Header';
import {Footer} from './components/footer/Footer';
import {Pages} from './components/router/Pages';



export class App extends React.Component {
    
    render() {
        return(
            <BrowserRouter>
                <div className="body">
                        <Header/> 
                        <Pages />
                        <Footer/>   
                </div>
            </BrowserRouter>
             
        )
    }
};
