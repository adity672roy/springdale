// src/redux/slices/facultySlice.js
import { createSlice } from "@reduxjs/toolkit";

const facultySlice = createSlice({
  name: "faculty",
  initialState: [
    {
      id: 1, img:"/images/teacher-1.jpg" ,
      name: "John Doe",
      position: "Principal",
      qualifications: "M.Ed",
      experience: 20,
    },
    {
      id: 2, img:"/images/teacher-2.jpg" ,
      name: "Jane Smith",
      position: "Vice Principal",
      qualifications: "M.Sc. in Physics",
      experience: 15,
    },
    {
      id: 3, img:"/images/teacher-3.jpg" ,
      name: "Emily Johnson",
      position: "English Teacher",
      qualifications: "M.A. in English",
      experience: 10,
    },
    {
      id: 4, img:"/images/teacher-4.jpg" ,
      name: "Michael Brown",
      position: "Mathematics Teacher",
      qualifications: "M.Sc. in Mathematics",
      experience: 8,
    },
    {
      id: 5, img:"/images/teacher-5.jpg" ,
      name: "Sophia Davis",
      position: "Science Teacher",
      qualifications: "M.Sc. in Chemistry",
      experience: 12,
    },
    {
      id: 6, img:"/images/teacher-6.jpg" ,
      name: "David Wilson",
      position: "Computer Science Teacher",
      qualifications: "B.Tech in Computer Science",
      experience: 5,
    },
  ],
  reducers: {},
});

export default facultySlice.reducer;
