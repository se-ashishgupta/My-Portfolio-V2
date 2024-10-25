import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeNavStatus: "/dashboard",
  currentNavStatus: "Dashboard",
  sidebarStatus: false,
  settingSidebarStatus: false,
  // themeStatus: "light",
  topBarFixedStatus: true,
};

const miscellaneousSlice = createSlice({
  name: "miscellaneous",
  initialState: initialState,
  reducers: {
    setMiscellaneous(state, action) {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
      });
    },
  },
});

export const { setMiscellaneous } = miscellaneousSlice.actions;

export default miscellaneousSlice.reducer;

export const toggleThemeThunkMiddleware = ({ themeStatus }) => {
  return (dispatch) => {
    dispatch(
      setMiscellaneous({
        themeStatus: themeStatus === "light" ? "dark" : "light",
      })
    );

    if (themeStatus == "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
};
