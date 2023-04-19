import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <section class="header">

            <div class="logo">Travel India</div>

            <nav class="navbar">
                <Link to="/" class="active">home</Link>
                <Link to="/about">About</Link>
                <Link to="/book">Book</Link>
                <Link to="/package">Package</Link>
                <Link to="/service">Service</Link>
                <Link to="/review">Review</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
            </nav>

            <div class="mobnav">
                <nav class="menu">
                    <input type="checkbox" id="menuToggle" />
                    <label for="menuToggle" class="menu-icon"><i class="fa fa-bars"></i></label>
                    <ul>
                        <li><Link to="/">
                            Home
                        </Link></li>
                        <li><Link to="/about" >
                            About
                        </Link></li>
                        <li><Link to="/book" >
                            Book
                        </Link></li>
                        <li><Link to="/package" >
                            Package
                        </Link></li>
                        <li><Link to="/service" >
                            Service
                        </Link></li>
                        <li><Link to="/review" >
                            Review
                        </Link></li>
                        <li><Link to="/contact" >
                            Contact
                        </Link></li>
                        <li><Link to="/login" >
                            Login
                        </Link></li>
                    </ul>
                </nav>
            </div>

        </section>
    )


}

export default Header;