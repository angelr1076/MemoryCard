import './assets/styles/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './assets/components/LandingPage';
import { GamePage } from './assets/components/GamePage';
import { Footer } from './assets/components/Footer';

function App() {
  return (
    <>
      <div id='main-content'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/game' element={<GamePage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
