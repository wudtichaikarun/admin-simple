import React from "react";
import L from "react-loadable";
import { RouteTemplate } from "../components/elements/templates";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const LOADABLE_CONFIG = { loading: () => null, delay: 2000 };
const Loadable = opts =>
  L({
    ...LOADABLE_CONFIG,
    ...opts
  });

const Main = {
  View: Loadable({
    loader: () =>
      import(/* webpackChunkName: "MainView" */ "../containers/main/View")
  })
};

const Dispatch = {
  List: Loadable({
    loader: () =>
      import(
        /* webpackChunkName: "DispatchList" */ "../containers/dispatch/List"
      )
  }),
  View: Loadable({
    loader: () =>
      import(
        /* webpackChunkName: "DispatchView" */ "../containers/dispatch/View"
      )
  }),
  Create: Loadable({
    loader: () =>
      import(
        /* webpackChunkName: "DispatchCreate" */ "../containers/dispatch/Create"
      )
  })
};

export default function Routers() {
  return (
    <Router basename={process.env.REACT_APP_BASE_URL}>
      <Switch>
        <RouteTemplate path="/" component={Main.View} exact />
        <RouteTemplate path="/dispatching" component={Dispatch.List} exact />
        <RouteTemplate
          path="/dispatching/create"
          component={Dispatch.List}
          exact
        />
        <RouteTemplate
          path="/dispatching/:id/view"
          component={Dispatch.View}
          exact
        />
      </Switch>
    </Router>
  );
}
