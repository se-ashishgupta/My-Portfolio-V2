import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticatdloader: false,
  authLoader: false,
  profileLoader: false,
  dashboardLoader: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState: initialState,
  reducers: {
    setLoader(state, action) {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
      });
    },
  },
});

export const { setLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
