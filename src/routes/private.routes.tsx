import { Switch, Route, Redirect } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Photos } from "../pages/Photos";
import { Studant } from "../pages/Studant";
import { StudantStore } from "../pages/Studant/store";
import { StudantUpdate } from "../pages/Studant/update";
import { UserEdit } from "../pages/User/edit";

export const PrivateRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Studant} />
      <Route path="/user/edit" component={UserEdit} />
      <Route path="/studant/create" component={StudantStore} />
      <Route path="/studant/update/:id" component={StudantUpdate} />
      <Route path="/studant/photo/:id" component={Photos} />
      <Route component={NotFound} />
      <Redirect to="/" />
    </Switch>
  );
};
