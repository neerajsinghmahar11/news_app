import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar(props) {
    let [search, setSearch] = useState("");



    function postSearch(e) {
        e.preventDefault()
        props.changeSearch(search)
        setSearch("")
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary background">
            <div className="container-fluid">
                <NavLink className="navbar-brand text-light" to='/'>News App</NavLink>

                <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="material-symbols-outlined">menu</span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item"><NavLink className="nav-link text-light" to="/?q=All">ALL</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link text-light" to="/?q=Politics">Politics</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link text-light" to="/?q=Crime">Crime</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link text-light" to="/?q=Science">Science</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link text-light" to="/?q=Technology">Technology</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link text-light" to="/?q=Entertainment">Entertainment</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link text-light" to="/?q=Sports">Sports</NavLink></li>

                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                other
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/?q=Cricket">Cricket</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/?q=IPL">IPL</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/?q=economics">economics</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/?q=International">International</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/?q=India">India</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/?q=Jokes">Jokes</NavLink></li>
                            </ul>
                        </li>



                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                language
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="?language=hi" >Hindi</Link></li>
                                <li><Link className="dropdown-item" to="?language=en" >English</Link></li>
                            </ul>
                        </li>

                    </ul>
                    <form className="d-flex" role="search" onSubmit={(e) => postSearch(e)}>
                        <input className="form-control me-2" name='search' onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light    " type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )

}
