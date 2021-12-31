import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const PublicRoutes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Redirect to="/login" />
    </Switch>
  );
};
