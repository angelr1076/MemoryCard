import PropTypes from 'prop-types';

function Modal({ showModal, setShowModal, title, message, buttonText }) {
  return (
    <>
      {showModal ? (
        <div className='modal'>
          <div className='modal-content'>
            <h1>{title}</h1>
            <p>{message}</p>
            <button className='btn' onClick={() => setShowModal(false)}>
              {buttonText}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export { Modal };
