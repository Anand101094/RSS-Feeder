import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div className="container nav-wrapper">
                <a href="#" className="brand-logo left">RSS Feeder</a>
                <ul id="nav" className="right">
                    <li><a href="#">My Feeds</a></li>
                    <li><a href="#" className=' pulse btn-floating waves-effect waves-light'><i className="material-icons">add</i></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar