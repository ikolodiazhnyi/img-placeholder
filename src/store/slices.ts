import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InputsState = {
  bg: string;
  width: string;
  height: string;
  caption: string;
};

const initialState: InputsState = {
  bg: "red",
  width: "300",
  height: "100",
  caption: "",
};

export const inputsSlice = createSlice({
  name: "toolkit",
  initialState,
  reducers: {
    setBg: (state, action: PayloadAction<string>) => {
      state.bg = action.payload;
    },
    setWidth: (state, action: PayloadAction<string>) => {
      state.width = action.payload ? action.payload : '300';
    },
    setHeight: (state, action: PayloadAction<string>) => {
      state.height = action.payload ? action.payload : '300';
    },
    setCaption: (state, action: PayloadAction<string>) => {
      state.caption = action.payload;
    },
  },
});

export const { setBg, setHeight, setWidth, setCaption } = inputsSlice.actions;

export default inputsSlice.reducer;
