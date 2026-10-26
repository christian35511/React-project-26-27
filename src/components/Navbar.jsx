import Button from "./Button";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <div>
            
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/UseMemoPage'>usememo</Link></li>
                </ul>
                <div className="btn">
                    <Button name="Login" />
                </div>
            </nav>

            
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '20px', 
                padding: '12px', 
                background: '#2f1f47', 
                borderTop: '1px solid #443366'
            }}>
                <Link to="/dashboard" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500', }}>Dashboard</Link>
                <Link to="/clubs" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500' }}>Clubs</Link>
                <Link to="/register" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500' }}>Register</Link>
                <Link to="/schedule" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500' }}>Schedule</Link>
                <Link to="/profile" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500' }}>Profile</Link>
                <Link to="/admin" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500' }}>Admin</Link>
            </div>
        </div>
    )
}
