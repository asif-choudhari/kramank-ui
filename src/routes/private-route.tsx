import { Route } from "react-router-dom";

type PrivateRoutePropsType = {
  path: string;
  Component: React.ComponentType;
};

function PrivateRoute({
  path,
  Component,
}: PrivateRoutePropsType): React.ReactElement {
  return <Route path={path} Component={Component} />;
}

export default PrivateRoute;
