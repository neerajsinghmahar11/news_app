import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer';
import Home from './Home/Home';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar/>

                    <Routes>
                        <Route path='' element={<Home q="All" />} />
                    </Routes>

                <Footer/>
            </BrowserRouter>
        )
    }
}
