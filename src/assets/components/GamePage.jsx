import { useState, useEffect } from 'react';
import { Scoreboard } from './Scordboard';
import { Card } from './Card';

function GamePage() {
  const [cards, setCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    // Call PokeAPI
    fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
      .then(response => response.json())
      .then(data => {
        const cards = data.results.map((pokemon, index) => ({
          id: index,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
        }));

        setCards(cards);
      });
  }, []);

  function handleCardClick(id) {
    // Find the card that was clicked
    const card = cards.find(card => card.id === id);

    // Check if the card has already been clicked
    if (card.clicked) {
      // Reset the game
      setCards(cards.map(card => ({ ...card, clicked: false })));
      setCurrentScore(0);
    } else {
      // Update the card to clicked
      setCards(
        cards.map(card => (card.id === id ? { ...card, clicked: true } : card))
      );
      setCurrentScore(currentScore + 1);
    }
  }

  return (
    <div>
      <h1>Let&apos;s Play</h1>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <div className='game-board'>
        {cards.map(card => (
          <Card
            key={card.id}
            image={card.image}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
}

export { GamePage };
