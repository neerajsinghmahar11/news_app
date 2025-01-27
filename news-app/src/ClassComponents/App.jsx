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
                        <Route path='/All' element={<Home q="All" />} />
                        <Route path='/Politics' element={<Home q="Politics" />} />
                        <Route path='/Crime' element={<Home q="Crime" />} />
                        <Route path='/Science' element={<Home q="Science" />} />
                        <Route path='/Technology' element={<Home q="Technology" />} />
                        <Route path='/Entertainment' element={<Home q="Entertainment" />} />
                        <Route path='/Sports' element={<Home q="Sports" />} />
                        <Route path='/Cricket' element={<Home q="Cricket" />} />
                        <Route path='/IPL' element={<Home q="IPL" />} />
                        <Route path='/economics' element={<Home q="economics" />} />
                        <Route path='/International' element={<Home q="International" />} />
                        <Route path='/India' element={<Home q="India" />} />
                        <Route path='/Jokes' element={<Home q="Jokes" />} />
                        <Route path='/*' element={<Home q="/ALL" />} />
                    </Routes>

                <Footer/>
            </BrowserRouter>
        )
    }
}
