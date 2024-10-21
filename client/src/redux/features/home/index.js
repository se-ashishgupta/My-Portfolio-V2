import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axios from "axios";
import { setLoader } from "../loader";

const URI = import.meta.env.VITE_SERVER_URL;
const initialState = {
  user: {},
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    setHome(state, action) {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
      });
    },
  },
});

export const { setHome } = homeSlice.actions;
export default homeSlice.reducer;

export const getHomeDetailsThunkMiddleware = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoader({ homeLoader: true }));
      const response = await axios.get(`${URI}/getportfolio`);

      if (response.status === 200) {
        const { poftfolio } = response.data;
        dispatch(setHome({ user: poftfolio }));
        dispatch(setLoader({ homeLoader: false }));
      }
    } catch (error) {
      let message = "ERROR";
      if (error.hasOwnProperty("response")) {
        message = error.response.data.message;
        message = "Something went wrong, Please refress the page!";
      }
      toast.error(message);
    }
  };
};
