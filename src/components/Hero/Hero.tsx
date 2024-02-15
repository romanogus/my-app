import photoGrid from '@assets/photo-grid.png';
import './Hero.css';

export default function Hero(){
    return (
        <section className='hero'>
            <img src={photoGrid} className='hero__photos' alt='photo grid'/>
            <h1 className='hero__header'>Online Experiences</h1>
            <p className='hero__text'>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}