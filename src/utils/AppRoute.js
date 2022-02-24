import React from "react";
import { Switch, Route } from "react-router-dom";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  Layout = Layout === undefined ? (props) => <>{props.children}</> : Layout;

  return (
    <Switch>
      <Route {...rest}>
        <Layout>
          <Component />
        </Layout>
      </Route>
    </Switch>
  );
};

export default AppRoute;
