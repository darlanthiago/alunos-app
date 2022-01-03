import { Switch, Route, Redirect } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Photos } from "../pages/Photos";
import { Studant } from "../pages/Studant";
import { UserEdit } from "../pages/User/edit";

export const PrivateRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Studant} />
      <Route path="/photos" component={Photos} />
      <Route path="/user/edit" component={UserEdit} />
      <Route component={NotFound} />
      <Redirect to="/" />
    </Switch>
  );
};
