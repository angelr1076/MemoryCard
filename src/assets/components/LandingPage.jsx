// LandingPage.jsx
import { Link } from 'react-router-dom';
import pikachu from '../images/pikachu.svg';
import '../styles/style.css';

function LandingPage() {
  return (
    <div className='landing'>
      <div className='link-container'>
        <Link to='/game'>
          <img src={pikachu} className='pikachu-logo' alt='Card logo' />
        </Link>
      </div>

      <h1 className='title'>Poké Card!</h1>
      <div className='getStarted'>
        <Link
          to='/game'
          className='play btn'
          style={{ border: '3px solid #213547' }}></Link>
        <div className='instruction'>
          <span style={{ marginTop: '2em' }}>
            Click on the <strong>ball</strong> or <strong>Pikachu</strong> to
            start the game. <br />
          </span>
        </div>
      </div>
    </div>
  );
}

export { LandingPage };
