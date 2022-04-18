import { createSlice } from "@reduxjs/toolkit";

const iniState = {
  cars: ["Model S", "Model 3", "Model X", "Model Y"],
};

const carSlice = createSlice({
  name: "car",
  initialState: iniState,
  reducers: {},
});

export const selectCars = (state) => {
  return state.car.cars;
};

export default carSlice.reducer;
