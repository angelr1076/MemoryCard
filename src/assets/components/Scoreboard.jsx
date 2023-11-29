import PropTypes from 'prop-types';

function Scoreboard({ currentScore, highScore, shakeAnimation }) {
  return (
    <div>
      <div className={`scores ${shakeAnimation}`}>
        <h2>Current Score: {currentScore}</h2>
        <h2>High Score: {highScore}</h2>
      </div>
    </div>
  );
}

Scoreboard.propTypes = {
  currentScore: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
  shakeAnimation: PropTypes.bool,
};

export { Scoreboard };
