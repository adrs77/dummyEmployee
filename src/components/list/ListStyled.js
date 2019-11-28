import styled from "styled-components";

export const ListContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  width: 100%;
  min-height: 400px;
  background-color: white;
  color: #232323;
  padding: 20px 25px 45px;
  border-radius: 8px;
  position: relative;

  .spinner-box {
    width: 100%;
    height: 100%;
    position: relative;
    > div {
      position: absolute;
      top: 25%;
      left: 50%;
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
  .empty-list-info {
    font-size: 32px;
    width: 100%;
    font-weight: bold;
    p {
      padding: 20px 0;
    text-align: center;

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
      span {
        margin: 0;
        display: block;
      }
    }
  }
 
`;
