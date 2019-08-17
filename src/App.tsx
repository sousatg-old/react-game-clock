import React, {FC} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Clock from './pages/Clock/Clock';
import Settings from './pages/Settings';

const App: FC = () => {
  return (
    <Router>
      <Route exact path="/" component={Clock} />
      <Route path="/settings" component={Settings} />
    </Router>
  );
}

export default App;
