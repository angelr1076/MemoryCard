import PropTypes from 'prop-types';

function Scoreboard({ currentScore, bestScore }) {
  return (
    <div>
      <div className='scores'>
        <h2>Current Score: {currentScore}</h2>
        <h2>Best Score: {bestScore}</h2>
      </div>
    </div>
  );
}

Scoreboard.propTypes = {
  currentScore: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
};

export { Scoreboard };
