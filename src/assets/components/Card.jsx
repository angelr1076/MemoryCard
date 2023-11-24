import PropTypes from 'prop-types';
function Card({ image, onClick }) {
  return (
    <div className='card' onClick={onClick}>
      <img src={image} className='card-img' alt='Pokemon' />
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { Card };
