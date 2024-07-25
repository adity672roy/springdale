// src/redux/slices/studentsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const studentsSlice = createSlice({
  name: 'students',
  initialState: {
    achievements: [
      { img :"/images/student-1.jpg",title: 'National Level Math Olympiad Winner', description: 'John Smith' },
      { img :"/images/student-2.jpg",title: 'Gold Medalist in State Swimming Championship', description: 'Sarah Lee' },
      { img :"/images/student-3.jpg",title: 'Winners of Inter-School Robotics Competition', description: 'Tech Innovators Club' },
    ],
    council: [
      { img :"/images/member-1.jpg", role: 'President', name: 'Amy Parker' },
      { img :"/images/member-2.jpg", role: 'Vice President', name: 'Rajiv Mehta' },
      { img :"/images/member-3.jpg", role: 'Secretary', name: 'Lisa Wong' },
    ],
  },
  reducers: {},
});

export default studentsSlice.reducer;
