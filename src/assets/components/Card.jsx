import PropTypes from 'prop-types';
function Card({ image, onClick, className }) {
  return (
    <div className={`card ${className}`} onClick={onClick} data-testid='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={image} className='card-img' alt='Pokemon' />
        </div>
        <div className='card-back'></div>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export { Card };
