import { useState, useEffect } from 'react';
import { Scoreboard } from './Scoreboard';
import { Card } from './Card';

function GamePage() {
  const [cards, setCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [animationTrigger, setAnimationTrigger] = useState(0);

  useEffect(() => {
    // Call PokeAPI
    fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
      .then(response => response.json())
      .then(data => {
        const cards = data.results.map((pokemon, index) => ({
          id: index,
          image:
            // Poke API image library
            `https://github.com/sashafirsov/pokeapi-sprites/blob/master/sprites/pokemon/other/dream-world/${
              index + 1
            }.svg?raw=true` || '../images/pokeball.svg',
        }));

        setCards(cards);
      });
  }, []);

  function shuffleArray(array) {
    let newArray = [...array];
    let currentIndex = newArray.length,
      randomIndex;

    // While there remain elements to shuffle
    while (currentIndex !== 0) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element
      [newArray[currentIndex], newArray[randomIndex]] = [
        newArray[randomIndex],
        newArray[currentIndex],
      ];
    }

    return newArray;
  }

  function handleCardClick(id) {
    // Find the card that was clicked
    const card = cards.find(card => card.id === id);
    const shuffledCards = shuffleArray([...cards]);
    setAnimationTrigger(count => count + 1);

    if (card.clicked) {
      // Reset the game if the same card was clicked
      setCards(shuffledCards.map(card => ({ ...card, clicked: false })));
      setCurrentScore(0);
    } else {
      // Update the card to clicked true
      setCards(
        shuffledCards.map(card =>
          card.id === id ? { ...card, clicked: true } : card
        )
      );
      setCurrentScore(currentScore + 1);
      // Update the high score
      if (currentScore + 1 > highScore) {
        setHighScore(currentScore + 1);
      }
    }
  }

  return (
    <>
      <h1>Let&apos;s Play</h1>
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <div className='game-board'>
        {cards.map(card => (
          <Card
            key={`${card.id}-${animationTrigger}`}
            image={card.image}
            onClick={() => handleCardClick(card.id)}
            className='card-shuffle-animation'
          />
        ))}
      </div>
    </>
  );
}

export { GamePage };
