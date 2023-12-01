import { useState, useEffect } from 'react';
import { Scoreboard } from './Scoreboard';
import { Card } from './Card';
import { Title } from './Title';
import { Modal } from './Modal';

function GamePage() {
  const [cards, setCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [animationTrigger, setAnimationTrigger] = useState(0);
  const [shakeAnimation, setShakeAnimation] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [buttonText, setButtonText] = useState('');

  useEffect(() => {
    // Call PokeAPI
    fetch('https://pokeapi.co/api/v2/pokemon?limit=8')
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

  function gameOver() {
    setCards(cards.map(card => ({ ...card, clicked: false })));
    setCurrentScore(0);
    setShakeAnimation(true);
    setTimeout(() => setShakeAnimation(false), 500);
    setShowModal(true);
    setTitle('Game Over!');
    setMessage('You clicked the same card twice!');
    setButtonText('Try Again?');
  }

  function playAgain() {
    setCards(cards.map(card => ({ ...card, clicked: false })));
    setCurrentScore(0);
    setHighScore(0);
    setShowModal(true);
    setTitle('You Won!');
    setMessage('You clicked all the right cards!');
    setButtonText('Play Again?');
  }

  function handleCardClick(id) {
    const card = cards.find(card => card.id === id);

    if (card.clicked) {
      gameOver();
    } else if (currentScore + 1 === cards.length) {
      playAgain();
    } else {
      setAnimationTrigger(count => count + 1);
      const shuffledCards = shuffleArray([...cards]);
      setCards(
        shuffledCards.map(card =>
          card.id === id ? { ...card, clicked: true } : card
        )
      );
      setCurrentScore(currentScore + 1);
      if (currentScore + 1 > highScore) {
        setHighScore(currentScore + 1);
      }
    }
  }

  function shuffleArray(array) {
    let newArray = [...array];
    let currentIndex = newArray.length,
      randomIndex;

    // While there are elements to shuffle
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

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title={title}
        message={message}
        buttonText={buttonText}
      />
      <Title />
      <Scoreboard
        currentScore={currentScore}
        highScore={highScore}
        shakeAnimation={shakeAnimation}
      />
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
