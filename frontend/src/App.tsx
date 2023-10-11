import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './containers/Movies';
import AddMovies from './components/AddMovies';

function App() {
  return (
    <>
    <Header />
    <Movies />
    <AddMovies />
    <Footer />
    </>
  );
}

export default App;
