import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component Imports
import { Home, Navbar, Footer, Vinyl, Carpet, Laminate, Tile, Portfolio, Contact } from './components'

const App = () => {
  return (
    <Router >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vinyl' element={<Vinyl />} />
        <Route path='/carpet' element={<Carpet />} />
        <Route path='/laminate' element={<Laminate />} />
        <Route path='/tile' element={<Tile />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
