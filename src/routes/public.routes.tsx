import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "../pages/Login";

export const PublicRoutes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Redirect to="/login" />
    </Switch>
  );
};
