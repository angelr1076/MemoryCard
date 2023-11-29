import PropTypes from 'prop-types';

function Scoreboard({ currentScore, highScore, shakeAnimation }) {
  return (
    <div>
      <div className='scores'>
        <h2 className={`current ${shakeAnimation}`}>
          Current Score: {currentScore}
        </h2>
        <h2 className={`high ${shakeAnimation}`}>High Score: {highScore}</h2>
      </div>
    </div>
  );
}

Scoreboard.propTypes = {
  currentScore: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
  shakeAnimation: PropTypes.string,
};

export { Scoreboard };
