import React from 'react'

const Header = () => {
  return (
    <div>
        <header>
        <div className="container">
            <nav className="navbar navbar-expand-md">
                <a className="navbar-brand" href="#"/><img src="images/logo.png" alt="" srcset=""/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav ml-auto">
                        <li className="menu-item active">
                            <a href="index.html">Home </a>
                        </li>
                        <li className="menu-item menu-item-has-children">
                            <a href="aboutus.html">About Us</a>

                        </li>
                        <li className="menu-item">
                            <a href="#">Leadership</a>
                            <ul className="sub-menu ">
                                <li><a href="leadership.html">Chairman</a></li>
                                <li><a href="leadership-president.html">President</a></li>
                                <li><a href="leadership-director.html">Director</a></li>
                                <li><a href="council-of-innovators.html">Council of Innovator</a></li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a href="partners.html">Partners & Associates</a>
                        </li>
                        <li className="menu-item">
                            <a href="global-chapters.html">Global Chapters</a>
                        </li>
                        <li className="menu-item">
                            <a href="#">More </a>
                            <ul className="sub-menu ">
                                <li><a href="economic-council.html">Economic Council</a></li>
                                <li><a href="ipr-council.html">IPR Council</a></li>
                                <li><a href="compliance-council.html">Compliance Council</a></li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a href="#">Contact</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    </header>
</div>
  )
}

export default Header
