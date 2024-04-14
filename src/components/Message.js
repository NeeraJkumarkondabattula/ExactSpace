import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../redux/chatSlice";
import styled from "styled-components";

const Message = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add(message));
    setMessage("");
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          value={message}
          className="messageBox"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendBtn">Send</button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  form {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    /* background-color: #77b0aa; */
    /* border: 1px solid black; */
    .messageBox {
      width: 80%;
      height: 40px;
      padding: 5px;
      font-family: "Poppins";
      color: gray;
      font-size: 14px;
      outline: none;
    }
    .sendBtn {
      width: 8%;
      height: 40px;
      background-color: #003c43;
      color: white;
      border: none;
      outline: none;
      border-radius: 4px;
    }
  }
  @media screen and (max-width: 600px) {
    margin-top: 50px;
    padding: 20px;
    form {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      /* background-color: #77b0aa; */
      /* border: 1px solid black; */
      .messageBox {
        width: 70%;
        height: 100px;
        padding: 30px;
        font-family: "Poppins";
        color: gray;
        font-size: 34px;
        outline: none;
      }
      .sendBtn {
        width: 20%;
        height: 100px;
        font-size: 34px;
      }
    }
  }
`;

export default Message;
