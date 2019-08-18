import React, {FC} from 'react';
import './App.css';
import {Route, HashRouter} from 'react-router-dom';
import Clock from './pages/Clock/Clock';
import Settings from './pages/Settings';
import { SettingsProvider } from './context/SettingsContext';
import ReactGA from 'react-ga';


ReactGA.initialize('UA-83018916-2');
ReactGA.pageview(window.location.pathname + window.location.search);

const basename = '/react-game-clock';

const App: FC = () => {
  return (
    <SettingsProvider>
      <HashRouter basename={basename}>
        <Route exact path="/" component={Clock} />
        <Route path="/settings" component={Settings} />
      </HashRouter>
    </SettingsProvider>
  );
}

export default App;
