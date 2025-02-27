import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary background">
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-light" to='/'>News App</NavLink>

                    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="material-symbols-outlined">menu</span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            <li className="nav-item"><NavLink className="nav-link text-light"  to="/">ALL</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link text-light" to="/Politics">Politics</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link text-light" to="/Crime">Crime</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link text-light" to="/Science">Science</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link text-light" to="/Technology">Technology</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link text-light" to="/Entertainment">Entertainment</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link text-light" to="/Sports">Sports</NavLink></li>

                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    other
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/Cricket">Cricket</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/IPL">IPL</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/economics">economics</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/International">International</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/India">India</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/Jokes">Jokes</NavLink></li>
                                </ul>
                            </li>



                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    language
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" onClick={()=> this.props.changeLanguage('hi')} >Hindi</button></li>
                                    <li><button className="dropdown-item" onClick={()=> this.props.changeLanguage('en')} >English</button></li>
                                </ul>
                            </li>
                            
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light    " type="submit">Search</button>
                        </form>               
                    </div>
                </div>
            </nav>
        )
    }
}
