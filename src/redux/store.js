// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "./slices/carouselSlice";
import facultyReducer from "./slices/facultySlice";
import studentsReducer from "./slices/studentsSlice";
import galleryReducer from "./slices/gallerySlice";
import academicsReducer from "./slices/academicsSlice";
import aboutUsReducer from "./slices/aboutUsSlice";
import admissionsReducer from "./slices/admissionsSlice";

const store = configureStore({
  reducer: {
    carousel: carouselReducer,
    faculty: facultyReducer,
    students: studentsReducer,
    gallery: galleryReducer,
    academics: academicsReducer,
    aboutUs: aboutUsReducer,
    admissions: admissionsReducer,
  },
});

export default store;
