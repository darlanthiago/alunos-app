import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Nav } from "./style";

export const Header = () => {
  const selector = useSelector((state: any) => state.example);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/login">
        <FaSignInAlt size={24} />
      </Link>
      <span style={{ color: "#fff" }}>
        Botão Clicado: {selector.buttonClick ? "SIM" : "NAO"}
      </span>
    </Nav>
  );
};
