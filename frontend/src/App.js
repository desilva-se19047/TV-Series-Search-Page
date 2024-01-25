import React from 'react';
import './App.css';
import SearchPage from './pages/searchPage.js';
import Header from './components/header.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchPage/>
      <Footer/>
    </div>
  );
}

export default App;
