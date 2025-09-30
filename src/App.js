import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Khateebs from './pages/Khateebs';
import Community from './pages/Community';
import About from './pages/About';
import WeeklyUpdates from './pages/WeeklyUpdates';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/khateebs" element={<Khateebs />} />
            <Route path="/community" element={<Community />} />
            <Route path="/about" element={<About />} />
            <Route path="/updates" element={<WeeklyUpdates />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
