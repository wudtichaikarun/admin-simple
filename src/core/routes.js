import React from "react";
import L from "react-loadable";
import RouteLayout from "../components/RouteLayout";
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
        <RouteLayout path="/" component={Main.View} exact />
        <RouteLayout path="/dispatching" component={Dispatch.List} exact />
        <RouteLayout
          path="/dispatching/create"
          component={Dispatch.List}
          exact
        />
        <RouteLayout
          path="/dispatching/:id/view"
          component={Dispatch.View}
          exact
        />
      </Switch>
    </Router>
  );
}
