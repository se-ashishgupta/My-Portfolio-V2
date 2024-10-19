import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { setLoader } from "../loader";
import createAxiosInstance from "../../../config/axiosInstance";
import { getItemFromStore, setItemToStore } from "../../../utils";
import { persistor } from "../../store";

const axiosInstance = createAxiosInstance();
const initialState = {
  isAuthenticated: false,
  role: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuth(state, action) {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
      });
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;

export const loginThunkMiddleware = (payload, callback) => {
  return async (dispatch) => {
    try {
      dispatch(setLoader({ authLoader: true }));
      const response = await axiosInstance.post("/login", payload);

      if (response.status === 200) {
        const { token } = response.data;
        setItemToStore("creativeProgrammer", token);
        await dispatch(setAuth({ token, isAuthenticated: true }));
        callback(null);
        toast.success("Logged In Successfully");
      }
    } catch (error) {
      let message = "ERROR";
      if (error.hasOwnProperty("response")) {
        message = error.response.data.message;
      } else {
        message = error.message;
      }
      toast.error(message);
    } finally {
      dispatch(setLoader({ authLoader: false }));
    }
  };
};

export const logoutThunkMiddleware = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoader({ loader: true }));
      const response = await axiosInstance.post("/logout");

      if (response.status == 200) {
        persistor.purge();
        localStorage.clear();
        dispatch(
          setAuth({
            token: null,
            isAuthenticated: false,
            role: null,
            isProfileSaved: false,
          })
        );
        toast.success("Logged Out Successfully");
      }
    } catch (error) {
      let message = "ERROR";
      if (error.hasOwnProperty("response")) {
        message = error.response.data.message;
      } else {
        message = error.message;
      }
      toast.error(message);
    } finally {
      dispatch(setLoader({ loader: false }));
    }
  };
};

export const clearMemoryThunkMiddleware = () => {
  return async (dispatch) => {
    try {
      persistor.purge();
      localStorage.clear();
      dispatch(
        setAuth({
          token: null,
          isAuthenticated: false,
          role: null,
          isProfileSaved: false,
        })
      );
    } catch (error) {
      let message = "ERROR";
      if (error.hasOwnProperty("response")) {
        message = error.response.data.message;
      } else {
        message = error.message;
      }
      toast.error(message);
    }
  };
};

export const checkIsUserAuthenticatedThunkMiddleware = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoader({ loader: true }));
      const token = getItemFromStore("creativeProgrammer");
      if (token) {
        await axiosInstance.get("/protected");
        dispatch(setAuth({ isAuthenticated: true, token }));
        // dispatch(getProfileThunkMiddleware());
      } else {
        dispatch(clearMemoryThunkMiddleware());
      }
    } catch (error) {
      dispatch(clearMemoryThunkMiddleware());
    } finally {
      dispatch(setLoader({ loader: false }));
    }
  };
};
