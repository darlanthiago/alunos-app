import { Switch, Route, Redirect } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Photos } from "../pages/Photos";
import { Studant } from "../pages/Studant";

export const PrivateRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Studant} />
      <Route path="/photos" component={Photos} />
      <Route component={NotFound} />
      <Redirect to="/" />
    </Switch>
  );
};
