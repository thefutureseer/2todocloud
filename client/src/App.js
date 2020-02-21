import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './layout/Navbar';
import Input from './components/Input';
import Button from './components/Button';
// import {Router} from 'express';

function App() {
  return (
    // <Router>
    <div className="App">
     <Navbar />
     <Input />
     <Button />
    </div>
    // </Router>
  );
}

export default App;