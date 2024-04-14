import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const Screen = () => {
  const { chat } = useSelector((state) => state.chat);

  const colors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];

  return (
    <Container>
      {chat &&
        chat.map((msg) => (
          <div className="message" key={msg.id}>
            <header>
              <div
                className="name"
                style={{
                  backgroundColor: colors[Math.round(Math.random() * 18)],
                }}>
                {msg.sender[0]}
              </div>
              <h2>{msg.sender}</h2>
              <p className="time">{msg.date}</p>
            </header>
            <div className="message-context">
              <span>{msg.message}</span>
            </div>
          </div>
        ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 400px;
  margin: 14px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  box-sizing: border-box;
  .message {
    padding: 10px 15px;

    header {
      display: flex;
      align-items: center;
      gap: 10px;
      .name {
        text-transform: capitalize;
        padding: 10px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        border-radius: 50%;
      }
      h2 {
        font-size: 16px;
        text-transform: capitalize;
      }
      .time {
        font-size: 12px;
      }
    }
    .message-context {
      span {
        padding: 10px 15px;
        border: 1px solid black;
        border-radius: 0px 10px 10px 10px;
        margin-left: 50px;
        font-size: 14px;
        font-weight: 500;
        background-color: white;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .message {
      width: 80%;
      padding: 10px 15px;
      header {
        .name {
          width: 76px;
          height: 76px;
          font-size: 38px;
        }
        h2 {
          font-size: 38px;
        }
        .time {
          margin-left: 10px;
          font-size: 32px;
        }
      }
      .message-context {
        span {
          display: inline-block;
          width: 100%;
          font-size: 34px;
          margin-left: 80px;
          padding: 30px 45px;
        }
      }
    }
  }
`;

export default Screen;
