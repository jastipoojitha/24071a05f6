import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "#c0e2e7", padding: "10px 20px", display: "flex", gap: "20px", justifyContent: "flex-end" }}>
      <Link to="/" style={link}>Home</Link>
      <Link to="/login" style={link}>Login</Link>
      <Link to="/register" style={link}>Register</Link>
      <Link to="/membershipPlans" style={link}>Membership Plans</Link>
      <Link to="/payment" style={link}>Payment</Link>
      <Link to="/contact" style={link}>Contact</Link>
    </nav>
  );
}

const link = { color: "#000000", textDecoration: "none", fontWeight: "bold" };

export default Navbar;
