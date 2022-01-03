import styled from "styled-components";
import { primaryColor, primaryDarkColor } from "../../config/colors";

export const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 16px;

    input {
      height: 40px;
      padding: 10px 20px;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-top: 5px;
      outline: none;
      font-size: 16px;
      color: ${primaryDarkColor};

      &:focus {
        border: 1px solid ${primaryColor};
      }
    }
  }

  button {
    height: 40px;
    font-size: 16px;
    transition: filter 200ms;

    &:hover {
      filter: brightness(90%);
    }
  }
`;
