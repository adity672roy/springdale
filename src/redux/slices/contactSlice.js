import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    formStatus: "",
  },
  reducers: {
    submitContactForm: (state, action) => {
      state.formStatus = "Submitted";
    },
  },
});

export const { submitContactForm } = contactSlice.actions;

export default contactSlice.reducer;
