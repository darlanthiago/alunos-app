import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
    padding: 0;
    margin: 0;
    background: none;
  }

  a,
  button {
    color: #fff;
    margin: 0 10px 0;
    font-weight: bold;
  }
`;

export const UserProfile = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    span {
      font-weight: bold;
      font-size: 16px;
    }

    small {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;
