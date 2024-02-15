import logo from '@assets/airbnb-logo.png';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className='nav'>
            {/* use svg react from assets folder*/}
            <img src={logo} alt="Airbnb Logo" className='nav__logo'/>
        </nav>
    )
}