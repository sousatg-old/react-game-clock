import React, {FC} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, HashRouter} from 'react-router-dom';
import Clock from './pages/Clock/Clock';
import Settings from './pages/Settings';
import { AppProvider } from './context/AppContext';

const basename = '/react-game-clock';

const App: FC = () => {
  return (
    <AppProvider>
      <HashRouter basename={basename}>
        <Route exact path="/" component={Clock} />
        <Route path="/settings" component={Settings} />
      </HashRouter>
    </AppProvider>
  );
}

export default App;
