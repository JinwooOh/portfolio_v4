import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Blog from './Blog';
import Project from './mainpage/Project';

import NotFound from './NotFound';

const baseUrl = process.env.PUBLIC_URL;
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={`${baseUrl}/`} component={App} />
      <Route path={`${baseUrl}/blog`} component={Blog} />
      <Route path={`${baseUrl}/project/:projectId`} component={Project} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
