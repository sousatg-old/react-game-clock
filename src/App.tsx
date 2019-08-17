import React, {FC} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';

const App: FC = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/settings" component={Settings} />
    </Router>
  );
}

export default App;
