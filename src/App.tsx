import React from 'react';
import './App.css';
import Menu from './utils/Menu';
import { BrowserRouter} from 'react-router-dom';
import { Route, Switch } from 'react-router';
import IndiceGeneros from './generos/IndiceGeneros';
import LandingPage from './LandingPage';
function App() {

  return (
    <>
    <BrowserRouter>
      <Menu/>
        <div className="container">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/generos">
          <IndiceGeneros />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App;
