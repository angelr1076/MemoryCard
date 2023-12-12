import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GamePage } from '../assets/components/GamePage';
import App from '../App';

// App tests
describe('App component', () => {
  it('renders correct heading', () => {
    render(<App />);
    const { container } = <App />;
    screen.debug(container);
    expect(screen.getByText('Poké Card')).toBeInTheDocument();
  });

  it('renders the card logo image', () => {
    render(<App />);
    const image = screen.getByAltText('Card logo');
    expect(image).toBeInTheDocument();
  });

  it('has a link to the game page', () => {
    render(<App />);

    const gameLink = screen.getByRole('link', { name: 'Card logo' });
    expect(gameLink).toHaveAttribute('href', '/game');
  });
});

// GamePage tests
describe('GamePage', () => {
  beforeEach(() => {
    window.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: new Array(8).fill({}).map((_, index) => ({ id: index })),
          }),
      })
    );
  });

  const renderWithRouter = (ui, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route);
    return render(<Router>{ui}</Router>);
  };

  it('renders without crashing', async () => {
    renderWithRouter(<GamePage />);
    expect(await screen.findByText(/Current Score: \d+/)).toBeInTheDocument();
  });

  it('renders cards after data is fetched', async () => {
    const { container } = renderWithRouter(<GamePage />);
    await waitFor(() => {
      const cards = container.querySelectorAll('.card');
      expect(cards.length).toBe(8);
    });
  });

  it('increments score when card is clicked', async () => {
    const { container } = renderWithRouter(<GamePage />);
    await waitFor(() => {
      const card = container.querySelector('.card');
      card.click();
      expect(screen.getByText(/Current Score: 1/)).toBeInTheDocument();
    });
  });

  it('resets score when card is clicked twice', async () => {
    const { container } = renderWithRouter(<GamePage />);
    await waitFor(() => {
      const card = container.querySelector('.card');
      card.click();
      card.click();
      expect(screen.getByText(/Current Score: 0/)).toBeInTheDocument();
    });
  });

  it('increments high score when score is greater than high score', async () => {
    const { container } = renderWithRouter(<GamePage />);
    await waitFor(() => {
      const card = container.querySelector('.card');
      card.click();
      expect(screen.getByText(/High Score: 1/)).toBeInTheDocument();
    });
  });

  it('does not increment high score when score is less than high score', async () => {
    const { container } = renderWithRouter(<GamePage />);
    await waitFor(() => {
      const card = container.querySelector('.card');
      card.click();
      card.click();
      expect(screen.getByText(/High Score: 1/)).toBeInTheDocument();
    });
  });

  it('renders the game over modal when score is 8', async () => {
    const { container } = renderWithRouter(<GamePage />);
    await waitFor(() => {
      const card = container.querySelector('.card');
      card.click();
      card.click();
      card.click();
      card.click();
      card.click();
      card.click();
      card.click();
      card.click();
      expect(screen.getByText(/Game Over/)).toBeInTheDocument();
    });
  });
});
