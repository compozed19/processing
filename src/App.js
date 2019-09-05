import React, { Component } from 'react';
import Header from './components/layout/Header';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './routes/AppRoute'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
