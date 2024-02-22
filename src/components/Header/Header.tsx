import './Header.css';
import logo from '@assets/troll-face.png';


export default function Header() {
    return (
        <nav className='header'>
            {/* use svg react from assets folder*/}
            <img src={logo} alt="Trollface Logo" className='header__logo'/>
            <h3 className='header__title'>Meme Generator</h3>
            <h4 className='header__subtitle'>React Course - Project 3</h4>
        </nav>
    )
}