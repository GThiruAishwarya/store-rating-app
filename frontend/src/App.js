// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import Routes from './routes';
import NavBar from './components/NavBar';
import './App.css';

const App = () => (
  <AuthProvider>
    <Router>
      <NavBar />
      <Routes />
    </Router>
  </AuthProvider>
);

export default App;
