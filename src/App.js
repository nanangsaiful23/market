import React from 'react';
import './App.css';
import Routes from './routes';
import { Router } from 'react-router';
import history from './services/history';


function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
