// LandingPage.jsx
import { Link } from 'react-router-dom';
import cards from '../images/cards.svg';
import '../styles/style.css';

function LandingPage() {
  return (
    <>
      <div className='card-container'>
        <Link to='/game'>
          <img src={cards} className='card-logo' alt='Card logo' />
        </Link>
      </div>

      <h1>Memory Card</h1>
      <div className='card'>
        <Link to='/game' className='play btn'>
          Start Game
        </Link>
        <p style={{ marginTop: '2em' }}>
          Click on &quot;Play&quot; to start the game. <br />
        </p>
      </div>
    </>
  );
}

export { LandingPage };
