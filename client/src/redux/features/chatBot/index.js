import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axios from "axios";
import { setLoader } from "../loader";

const URI = import.meta.env.VITE_SERVER_URL;

const initialState = {
  messages: [],
};

const chatBotSlice = createSlice({
  name: "chatBot",
  initialState: initialState,
  reducers: {
    setChatBot(state, action) {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
      });
    },
  },
});

export const { setChatBot } = chatBotSlice.actions;
export default chatBotSlice.reducer;

export const sendMessageThunkMiddleware = ({ messages, message }) => {
  return async (dispatch) => {
    try {
      dispatch(setLoader({ chatBotLoader: true }));
      dispatch(setChatBot({ messages: [...messages, message] }));

      const response = await axios.post(`${URI}/chat`, {
        question: message.content,
      });

      console.log(response.data);

      if (response.status === 200) {
        let { content, role } = response.data.reply;
        content = content.replace("**", "");

        dispatch(
          setChatBot({ messages: [...messages, message, { role, content }] })
        );
      }
    } catch (error) {
      let message = "ERROR";
      if (error.hasOwnProperty("response")) {
        message = error.response.data.message;
      }
      toast.error(message);
    } finally {
      dispatch(setLoader({ chatBotLoader: false }));
    }
  };
};
