import './App.css';
import Navbar from './Nav&Footer/Navbar';
import Topics from './Topic/Topics';
import Footer from './Nav&Footer/Footer';
import Calculator from './Calculator/Calculator';
import NextWindow from './Topic/TopicsPage'; // Adjust the path as needed
import geber from './pictures/geber.jpeg';
import clarissa from './pictures/clarissa.jpeg';
import alexis from './pictures/alexis.jpg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function MainContent() {
  return (
    <div>
      <Topics />
      <Calculator />
      <h2>About us</h2>
      <div className='about-us-container'>
        <div className='about-us'>
          <text><strong>Clarissa Dominguez:</strong></text> <p>I graduate this semester with a Bachelor's in Computer Science & a minor in Mathematics.</p>
          <img className='about-us-image' src={clarissa !== "N/A" ? clarissa : "https://via.placeholder.com/400"} alt={clarissa} />
        </div>
        <div className='about-us'>
          <text><strong>Geber Leyva:</strong></text> <p>I graduate this semester with a Bachelor's in Computer Science.</p>
          <img className='about-us-image' src={geber !== "N/A" ? geber : "https://via.placeholder.com/400"} alt={geber} />
        </div>
        <div className='about-us'>
          <text><strong>Alexis Gonzalez:</strong></text> <p>This is my 2nd semester at UTEP. I am 19 years old.</p>
          <img className='about-us-image' src={alexis !== "N/A" ? alexis : "https://via.placeholder.com/400"} alt={alexis} />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
    <div className='wholeApp'>
      <Navbar />
      <div className='main'>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/NextWindow" element={<NextWindow />} />
      </Routes>
      </div>
      <Footer />
    </div>
  </Router>
  );
}

export default App;