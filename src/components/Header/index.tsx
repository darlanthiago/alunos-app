import {
  FaHome,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/modules/auth/actions";
import { Nav, UserProfile } from "./style";

export const Header = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: any) => state.auth);

  function handleSignout() {
    dispatch(logout());
  }

  return (
    <Nav>
      {selector.isLoggedIn && (
        <>
          <UserProfile>
            <Link to="/user/edit">
              <FaUserCircle size={24} />
              <div>
                <span>{selector.user.nome}</span>
                <small>{selector.user.email}</small>
              </div>
            </Link>
          </UserProfile>
        </>
      )}
      <Link to="/">
        {selector.isLoggedIn ? <FaHome size={24} /> : <FaSignInAlt size={24} />}
      </Link>
      {!selector.isLoggedIn && (
        <Link to="/register">
          <FaUserCircle size={24} />
        </Link>
      )}
      {selector.isLoggedIn && (
        <button onClick={handleSignout}>
          <FaSignOutAlt size={24} />
        </button>
      )}
    </Nav>
  );
};
