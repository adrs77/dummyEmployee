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
  }
  .add-button {
    text-align: right;
    padding: 16px 0;
    button {
      color: #6466d4;
    padding: 5px 10px;
    background-color: transparent;
    border: 2px solid #6466d4;
    font-weight: 600;
    border-radius: 8px;
    }
  }
`;
