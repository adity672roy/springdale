// src/redux/slices/academicsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const academicsSlice = createSlice({
  name: 'academics',
  initialState: {
    curriculum: {
      primary: ['English', 'Mathematics', 'Science', 'Social Studies', 'Art', 'Physical Education'],
      secondary: ['English', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Studies', 'Computer Science', 'Physical Education', 'Art'],
      seniorSecondary: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer Science', 'English', 'Accountancy', 'Business Studies', 'Economics'],
    },
    teachingMethodologies: 'We use a blend of traditional and modern teaching techniques to cater to different learning styles.',
    educationalResources: 'Digital classrooms, interactive learning modules, and access to online educational platforms.',
  },
  reducers: {},
});

export default academicsSlice.reducer;
