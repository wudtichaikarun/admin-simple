// @flow
import React from "react";
import { Route } from "react-router-dom";

type Props = {
  //   component: React.ComponentElement
  component: any
};

export default function RouteLayout(props: Props) {
  const { component: Component, ...rest } = props;
  return <Route {...rest} render={_props => <Component {..._props} />} />;
}
