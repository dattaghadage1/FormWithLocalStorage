import { createSlice } from '@reduxjs/toolkit';

let nextId = 0;

const formSlice = createSlice({
  name: 'form',
  initialState: { formData: [] },
  reducers: {
    addFormData: (state, action) => {
      state.formData.push({ ...action.payload, id: nextId++ });
    },
    updateFormData: (state, action) => {
      const index = state.formData.findIndex((data) => data.id === action.payload.id);
      if (index !== -1) {
        state.formData[index] = action.payload;
      }
    },
    deleteFormData: (state, action) => {
      state.formData = state.formData.filter((data) => data.id !== action.payload);
    },
    loadFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { addFormData, updateFormData, deleteFormData, loadFormData } = formSlice.actions;

export default formSlice.reducer;
