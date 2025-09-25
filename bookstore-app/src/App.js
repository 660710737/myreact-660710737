// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
// import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import Category from './pages/Category';
import Book from './pages/Books';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/fiction" element={<Category />} />
            <Route path="/books" element={<Book />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
   
  );
}

export default App;