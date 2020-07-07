import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { GlobalFeed } from "pages/globalFeed";
import { Article } from "pages/article";
import { Layout } from "components/Layout";
import { Authentication } from "pages/authentication";

export const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={GlobalFeed} exact />
          <Route path="/login" component={Authentication} />
          <Route path="/register" component={Authentication} />
          <Route path="/articles/:slug" component={Article} exact />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};
