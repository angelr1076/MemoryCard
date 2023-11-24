// LandingPage.jsx
import { Link } from 'react-router-dom';
import cards from '../images/cards.svg';
import '../styles/style.css';

function LandingPage() {
  return (
    <div className='landing'>
      <div className='link-container'>
        <Link to='/game'>
          <img src={cards} className='card-logo' alt='Card logo' />
        </Link>
      </div>

      <h1 className='title'>Poké Memo Cards</h1>
      <div className='getStarted'>
        <Link to='/game' className='play btn'>
          Get Started
        </Link>
        <p style={{ marginTop: '2em' }}>
          Click on &quot;Get Started&quot; to start the game. <br />
        </p>
      </div>
    </div>
  );
}

export { LandingPage };
