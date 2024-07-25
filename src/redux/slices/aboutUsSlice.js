// src/redux/slices/aboutUsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const aboutUsSlice = createSlice({
  name: "aboutUs",
  initialState: {
    history:
      "Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.",
    vision:
      "To create a learning environment that fosters academic excellence, critical thinking, and ethical values.",
    mission:
      "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.",
    principalMessage:
      "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.",
    infrastructure: [
      {
        img: "/images/lab.jpg",
        title: "State-of-the-art science and computer labs",
      },
      {
        img: "/images/classroom.jpg",
        title: "Spacious and well-equipped classrooms",
      },
      {
        img: "/images/library.jpg",
        title: "Library with a vast collection of books and digital resources",
      },
      {
        img: "/images/playground.jpg",
        title:
          "Sports facilities including a playground, gymnasium, and swimming pool",
      },
    ],
  },
  reducers: {},
});

export default aboutUsSlice.reducer;
