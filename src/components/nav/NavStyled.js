import styled from "styled-components";

export const NavContainer = styled.div`
  background-color: white;
  height: auto;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  .title {
    color: #6466d4;
    margin: 0;
    font-size: 32px;
    padding: 16px 0;
    @media only screen and (max-width: 767px) {
      font-size: 27px;
      text-align: center;
      }
  }
  .button-container {
    text-align: right;
    padding: 16px 0;
    .button-add {
      color: #6466d4;
      background-color: transparent;
      border: 2px solid #6466d4;
    }
    .button-remove {
      color: white;
      border: 2px solid #ff7264;
      background-color: #ff7264;
    }
    .button-remove,
    .button-add {
      margin: 0 5px;
      font-weight: 600;
      border-radius: 8px;
      padding: 5px 10px;
      text-transform: uppercase;
    }
    @media only screen and (max-width: 767px) {
      font-size: 12px;
      margin: auto;
      text-align: center;
  }
  }
`;
