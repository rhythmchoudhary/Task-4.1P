// src/App.js
import React from 'react';
import Header from './components/header';
import Articles from './components/featuredarticle';
import Tutorials from './components/featuredtutorial';
import Footer from './components/footer';
import './App.css';
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Articles />
        <Tutorials />
      </main>
      <Footer />
    </div>
  );
}

export default App;