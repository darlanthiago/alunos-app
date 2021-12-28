import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "../components/Home";
import { NotFound } from "../components/NotFound";

export const PrivateRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route component={NotFound} />
      <Redirect to="/" />
    </Switch>
  );
};
