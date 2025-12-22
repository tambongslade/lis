import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import LisDev from './pages/LisDev';
import LisCarwash from './pages/LisCarwash';
import Rennova from './pages/Rennova';
import Contact from './pages/Contact';

// Layout wrapper to handle scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lis-dev" element={<LisDev />} />
        <Route path="/lis-carwash" element={<LisCarwash />} />
        <Route path="/rennova" element={<Rennova />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
