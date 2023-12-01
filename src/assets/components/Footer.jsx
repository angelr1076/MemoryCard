import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='footer'>
      <p>
        Created by Angel Rodriguez © {new Date().getFullYear()}
        <a
          href='https://github.com/angelr1076/MemoryCard'
          target='_blank'
          rel='noopener noreferrer'>
          <FaGithub className='footer-icon' />
        </a>
      </p>
    </footer>
  );
}

export { Footer };
