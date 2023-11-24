function Card({ image, onClick }) {
  return (
    <div className='card' onClick={onClick}>
      <img src={image} className='card-img' alt='Memory Card' />
    </div>
  );
}

export { Card };
