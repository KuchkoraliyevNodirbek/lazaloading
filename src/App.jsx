// src/App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css'; // Tailwind CSS fayli

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="mb-4">
          <ul className="flex space-x-4">
            <li><Link className="text-blue-500 hover:text-blue-700" to="/">Home</Link></li>
            <li><Link className="text-green-500 hover:text-green-700" to="/about">About</Link></li>
            <li><Link className="text-yellow-500 hover:text-yellow-700" to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Suspense fallback={<div className="text-center text-gray-500">Yuklanmoqda...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
