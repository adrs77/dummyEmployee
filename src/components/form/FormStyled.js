import styled from "styled-components";

export const FormContainer = styled.div`
  .input-box {
    input {
      width: 100%;
      border: 1px solid grey;
      display: block;
      margin-bottom: 10px;
    }
  }
  .disabled {
    input {
      background-color: lightgray;
      cursor: not-allowed;
    }
  }
  span {
    color: crimson;
  }
  .button-submit,
  .button-close {
    margin-right: 5px;
    font-weight: 600;
    border-radius: 8px;
    padding: 5px 10px;
    text-transform: uppercase;
  }

  .button-submit {
    color: #6466d4;
    background-color: transparent;
    border: 2px solid #6466d4;
  }
  .button-close {
    color: white;
    border: 2px solid #ff7264;
    background-color: #ff7264;
  }
`;
