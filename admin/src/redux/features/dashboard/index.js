import { createSlice } from "@reduxjs/toolkit";
import { setLoader } from "../loader";
import createAxiosInstance from "../../../config/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
  dashboardStats: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    setDashboard(state, action) {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
      });
    },
  },
});

export const { setDashboard } = dashboardSlice.actions;
export default dashboardSlice.reducer;

const axiosInstance = createAxiosInstance();

export const getDashboardStatsThunkMiddleware = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoader({ dashboardLoader: true }));

      const response = await axiosInstance.get(`/admin/dashboardstats`);

      if (response.status === 200) {
        const { dashboardStats } = response.data;
        dispatch(setDashboard({ dashboardStats }));
      }
    } catch (error) {
      let message = "ERROR";
      if (error.hasOwnProperty("response")) {
        message = error.response.data.message;
      }
      toast.error(message);
    } finally {
      dispatch(setLoader({ dashboardLoader: false }));
    }
  };
};
