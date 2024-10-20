import { createSlice } from "@reduxjs/toolkit";
import { setLoader } from "../loader";
import createAxiosInstance from "../../../config/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
  generalInfo: null,
};

const axiosInstance = createAxiosInstance();

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setProfile(state, action) {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
      });
    },
  },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;

export const getGeneralInfoThunkMiddleware = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoader({ profileLoader: true }));

      const response = await axiosInstance.get(`/admin/generalInfo`);

      if (response.status === 200) {
        const { generalInfo } = response.data;
        dispatch(setProfile({ generalInfo }));
      }
    } catch (error) {
      let message = "ERROR";
      if (error.hasOwnProperty("response")) {
        message = error.response.data.message;
      }
      toast.error(message);
    } finally {
      dispatch(setLoader({ profileLoader: false }));
    }
  };
};

export const updateProfileThunkMiddleware = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(setLoader({ profileLoader: true }));
      console.log(payload);

      const response = await axiosInstance.put(`/admin/updateavatar`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        const { message } = response.data;
        await dispatch(getGeneralInfoThunkMiddleware());
        toast.success(message);
      }
    } catch (error) {
      let message = "ERROR";
      if (error.hasOwnProperty("response")) {
        message = error.response.data.message;
      }
      toast.error(message);
    } finally {
      dispatch(setLoader({ profileLoader: false }));
    }
  };
};
