import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "63701cc1f03239b7f700000e",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      if (state.mode === "light") {
        state.mode = "dark";

        // change CSS for scrollbar
        const root = document.querySelector(":root");
        root.style.setProperty("--scrollbar-color", "#21295c");
        root.style.setProperty("--scrollbar-background", "#7a7f9d");
      } else {
        state.mode = "light";

        const root = document.querySelector(":root");
        root.style.setProperty("--scrollbar-color", "#c6a85f");
        root.style.setProperty("--scrollbar-background", "#e0e0e0");
      }
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
