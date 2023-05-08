import React from 'react';
import Navigation from './components/Navigation.js';
import Article from './components/Article.js';
import Footer from './components/Footer.js';
import './styles/App.css';

export default function App() {
  return (
    <div>
      <Navigation />
      <Article />
      <Footer />
    </div>
  );
}
