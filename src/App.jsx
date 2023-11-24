import './assets/styles/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './assets/components/LandingPage';
import { GamePage } from './assets/components/GamePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/game' element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
