import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Form = styled.form`
  label {
    width: 180px;
    height: 180px;
    border: 5px dashed ${primaryColor};
    border-radius: 50%;
    display: flex;
    background: #eee;
    margin: 30px auto;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
      width: 180px;
      height: 180px;
    }
  }

  input {
    display: none;
  }
`;
