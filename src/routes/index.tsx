import { PublicRoutes } from "./public.routes";
import { PrivateRoutes } from "./private.routes";
import { useSelector } from "react-redux";

export const Routes = () => {
  const selector = useSelector((state: any) => state.auth);

  const isLoggedIn = selector.isLoggedIn;

  return isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />;
};
