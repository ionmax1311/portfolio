import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import content from './content';

function App() {
  return (
    <div className="App">
      <Header />
      <Content content={content} />
      <Footer />
    </div>
  );
}

export default App;
