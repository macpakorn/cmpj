import React from 'react';
import Main from './views/Main'
import Number1 from './views/Number1'
import Number2 from './views/Number2'
import Number3 from './views/Number3'
import Number4 from './views/Number4'
import Number5 from './views/Number5'
import Number6 from './views/Number6'
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/Main">
    <Main/>
    </Route>
    <Route path="/Number1">
    <Number1/>
    </Route>
    <Route path="/Number2">
    <Number2/>
    </Route>
    <Route path="/Number3">
    <Number3/>
    </Route>
    <Route path="/Number4">
    <Number4/>
    </Route>
    <Route path="/Number5">
    <Number5/>
    </Route>
    <Route path="/Number6">
    <Number6/>
    </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
