import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Screen from "../components/Screen";
import Message from "../components/Message";

const Chat = () => {
  return (
    <Container>
      <Header />
      <Screen />
      <Message />
    </Container>
  );
};

const Container = styled.div`
  width: 1096px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: #edf1f5;
  border: 1px solid black;
`;

export default Chat;
