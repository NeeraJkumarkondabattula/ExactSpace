import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <h1>Exact Space</h1>
      <p>This Channel Is For Company Wide Chatter</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid gray;
  h1 {
    font-size: 25px;
    margin: 0;
    color: black;
  }
  p {
    font-size: 16px;
    margin: 0;
    color: gray;
  }
  @media screen and (max-width: 600px) {
    padding: 20px 50px;
    h1 {
      font-size: 45px;
      margin: 0;
      color: black;
    }
    p {
      font-size: 36px;
      margin: 0;
      color: gray;
    }
  }
`;

export default Header;
