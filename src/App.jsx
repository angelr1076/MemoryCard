import cards from './assets/images/cards.svg';
import './assets/styles/style.css';

function App() {
  return (
    <>
      <div>
        <div className='card-container'>
          <img src={cards} className='card-logo' alt='Card logo' />
        </div>
      </div>
      <h1>Memory Card</h1>
      <div className='card'>
        <button className='play btn'>Play</button>
        <p>
          Click on &quot;Play&quot; to start the game. <br />
        </p>
      </div>
    </>
  );
}

export default App;
