import { combineReducers } from "@reduxjs/toolkit";
import inputsSlice from "./slices";

const rootReducer = combineReducers({ inputs: inputsSlice });
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
