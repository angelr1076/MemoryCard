import PropTypes from 'prop-types';

function Title() {
  return <h1 className='title'>Poké Card</h1>;
}

Title.PropTypes = {
  title: PropTypes.string.isRequired,
};

export { Title };
