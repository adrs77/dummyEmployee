import styled from "styled-components";

export const ListContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  width: 100%;
  min-height: 800px;
  background-color: white;
  color: #232323;
  padding: 25px 25px;
  border-radius: 8px;

  .spinner-box {
    width: 100%;
    height: 100%;
    position: relative;
    > div {
      position: absolute;
      top: 25%;
      left: 50%;
      transform: translate(-50% -50%);
    }
  }
  .list-item {
   margin-top: 25px;
   .user-pic {
     text-align: center;
     margin-bottom: 25px;
    img {
      width: 120px;
    }
   }
  }
  .card-container {
    background-color: #f4f4f9;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    h4 {
      font-weight: bold;
    }
    .user-info {
      p {
        margin: 0;
      }
    }
  }
`;
