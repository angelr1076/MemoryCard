import PropTypes from 'prop-types';
function Card({ image, onClick, className }) {
  return (
    <div className={`card ${className}`} onClick={onClick}>
      <div className='frame'>
        <img src={image} className='card-img' alt='Pokemon' />
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
