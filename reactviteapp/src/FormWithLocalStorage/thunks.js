// src/store/thunks.js

import { addFormData } from "./Redux/FormSlice";

export const saveFormData = (formData) => (dispatch) => {
  localStorage.setItem('formData', JSON.stringify(formData));
  dispatch(addFormData(formData));
};

export const loadFormData = () => (dispatch) => {
  const formData = JSON.parse(localStorage.getItem('formData')) || [];
  formData.forEach((data) => dispatch(addFormData(data)));
};
