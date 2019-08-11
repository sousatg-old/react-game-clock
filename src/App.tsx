import React from 'react';
import './App.css';
import Clock from './components/Clock/Clock';

const App: React.FC = () => {
  return (
    <div className="container">
      <Clock />
    </div>
  );
}

export default App;
