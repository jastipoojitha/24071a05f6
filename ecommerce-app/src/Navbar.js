import { Link } from "react-router-dom";
const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>E-Commerce</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/catalogue">Catalogue</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
     );
}
export default NavBar;