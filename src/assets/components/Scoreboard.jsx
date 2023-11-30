import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaHome } from 'react-icons/fa';

function Scoreboard({ currentScore, highScore, shakeAnimation }) {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the LandingPage
  };

  return (
    <div>
      <div className={`scores ${shakeAnimation ? 'shake' : ''}`}>
        <h2>Current Score: {currentScore}</h2>
        <FaHome
          className='btn-alt'
          alt='home button'
          title='home button'
          onClick={handleHomeClick}
        />
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
