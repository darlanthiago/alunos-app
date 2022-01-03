import styled from "styled-components";
import { primaryColor, primaryDarkColor } from "../../config/colors";

export const StudantContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;

    & + div {
      border-top: 1px solid #eee;
    }

    span {
      text-align: left;
    }

    svg {
      cursor: pointer;
    }
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

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

export const Button = styled.button`
  margin-top: 10px;

  color: #fff;

  a {
    margin: 0;
    padding: 0;
    border: 0;
    color: #fff;
  }
`;

export const ProfileImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;

  img:first-child {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 2px dashed ${primaryDarkColor};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;

    bottom: 0;
    color: #fff;
    background: ${primaryColor};
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
