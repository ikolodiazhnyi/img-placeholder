import { RootState } from "./rootReducer";

export const getBg = (state: RootState) => state.inputs.bg;
export const getWidth = (state: RootState) => state.inputs.width;
export const getHeight = (state: RootState) => state.inputs.height;
export const getCaption = (state: RootState) => state.inputs.caption;
