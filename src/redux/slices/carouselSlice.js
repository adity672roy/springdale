import { createSlice } from "@reduxjs/toolkit";

const carouselSlice = createSlice({
  name: "carousel",
  initialState: [
    {
      id: 1,
      image: "/images/sports_day.jpg",
      title: "Annual Sports Day",
      description: "Celebrating Excellence in Sports",
    },
    {
      id: 2,
      image: "/images/science_exhibition.jpg",
      title: "Science Exhibition",
      description: "Showcasing Student Innovations",
    },
    {
      id: 3,
      image: "/images/cultural_fest.jpg",
      title: "Cultural Fest",
      description: "Embracing Diversity and Creativity",
    },
  ],
  reducers: {},
});

export default carouselSlice.reducer;
