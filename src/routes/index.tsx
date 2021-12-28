import { PublicRoutes } from "./public.routes";
import { PrivateRoutes } from "./private.routes";

export const Routes = () => {
  const isLoggedIn = false;

  return isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />;
};
