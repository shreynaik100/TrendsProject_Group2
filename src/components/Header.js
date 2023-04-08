import { BrowserRouter as Router, Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <section class="header">

            <a href="index.html" class="logo">Travel India</a>

            <nav class="navbar">
                <NavLink to="/" class="active">home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/book">Book</NavLink>
                <NavLink to="/package">Package</NavLink>
                <NavLink to="/service">Service</NavLink>
                <NavLink to="/review">Review</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>

            <div class="mobnav">
                <nav class="menu">
                    <input type="checkbox" id="menuToggle" />
                    <label for="menuToggle" class="menu-icon"><i class="fa fa-bars"></i></label>
                    <ul>
                        <li><NavLink to="/">
                            Home
                        </NavLink></li>
                        <li><NavLink to="/about" >
                            About
                        </NavLink></li>
                        <li><NavLink to="/book" >
                            Book
                        </NavLink></li>
                        <li><NavLink to="/package" >
                            Package
                        </NavLink></li>
                        <li><NavLink to="/service" >
                            Service
                        </NavLink></li>
                        <li><NavLink to="/review" >
                            Review
                        </NavLink></li>
                        <li><NavLink to="/contact" >
                            Contact
                        </NavLink></li>
                    </ul>
                </nav>
            </div>

        </section>
    )


}

export default Header;