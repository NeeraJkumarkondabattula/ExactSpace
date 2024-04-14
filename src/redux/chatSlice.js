import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_list: ["Alan", "Bob", "Carol", "Dean", "Elin"],
  chat: [
    {
      id: 1,
      sender: "ExactSpace Bot",
      message:
        "Welcome to Team Chat. Send a message now to start interacting with other users in the app.",
      date: Date().slice(15, 21),
    },
    {
      id: 2,
      sender: "Carol",
      message: "hey everyone",
      date: Date().slice(15, 21),
    },
    {
      id: 3,
      sender: "Bob",
      message: "hello everyone",
      date: Date().slice(15, 21),
    },
  ],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    add: (state, action) => {
      if (action.payload != "") {
        state.chat.push({
          id: Math.round(Math.random() * 10000),
          sender: initialState.user_list[Math.round(Math.random() * 5)],
          message: action.payload,
          date: Date().slice(15, 21),
        });
      }
    },
  },
});

export const { add } = chatSlice.actions;

export default chatSlice.reducer;
