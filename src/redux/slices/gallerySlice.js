// src/redux/slices/gallerySlice.js
import { createSlice } from '@reduxjs/toolkit';

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: [
    { id: 1, image: '/images/sports_day.jpg', title: 'Sports Day', description: 'Students participating in various sports events.' },
    { id: 2, image: '/images/science_exhibition.jpg', title: 'Science Exhibition', description: 'Students presenting their science projects.' },
    { id: 3, image: '/images/cultural_fest.jpg', title: 'Cultural Fest', description: 'Students performing in the cultural fest.' },
    { id: 4, image: '/images/classroom.jpg', title: 'Classroom', description: 'A glimpse of our interactive classrooms.' },
    { id: 5, image: '/images/library.jpg', title: 'Library', description: 'Students reading and studying in the school library.' },
  ],
  reducers: {},
});

export default gallerySlice.reducer;
