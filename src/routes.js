import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Chat from './pages/Chat';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/chat" component={Chat} />
    </BrowserRouter>
  );
};

export default Routes;
