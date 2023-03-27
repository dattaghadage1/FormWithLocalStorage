import React, { useState, useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { addFormData, updateFormData, deleteFormData} from './Redux/FormSlice';
import { loadFormDataThunk } from './thunks';
import { useDispatch } from 'react-redux';
import { loadFormData,saveFormData } from './Redux/FormSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    password: '',
    gender: '',
    transport: [],
    nationality: '',
  });

  useEffect(() => {
    dispatch(loadFormData());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'transport') {
      const transport = [...formData.transport];
      const index = transport.indexOf(value);

      if (index === -1) {
        transport.push(value);
      } else {
        transport.splice(index, 1);
      }

      setFormData({ ...formData, transport });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveFormData(formData));
    setFormData({
      name: '',
      mail: '',
      password: '',
      gender: '',
      transport: [],
      nationality: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="mail">Mail:</label>
        <input
          type="email"
          id="mail"
          name="mail"
          value={formData.mail}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="gender">Gender:</label>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === 'male'}
          onChange={handleChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === 'female'}
          onChange={handleChange}
        />
        Female
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="other"
          checked={formData.gender === 'other'}
          onChange={handleChange}
        />
        Other
      </label>
    </div>
    <div>
      <label htmlFor="transport">Transport:</label>
      <label>
        <input
          type="checkbox"
          name="transport"
          value="bike"
          checked={formData.transport.includes('bike')}
          onChange={handleChange}
        />
        Bike
      </label>
      <label>
        <input
          type="checkbox"
          name="transport"
          value="car"
          checked={formData.transport.includes('car')}
          onChange={handleChange}
        />
        Car
      </label>
      <label>
        <input
          type="checkbox"
          name="transport"
          value="bus"
          checked={formData.transport.includes('bus')}
          onChange={handleChange}
        />
        Bus
      </label>
      <label>
        <input
          type="checkbox"
          name="transport"
          value="train"
          checked={formData.transport.includes('train')}
          onChange={handleChange}
        />
        Train
      </label>
      <label>
        <input
          type="checkbox"
          name="transport"
          value="plane"
          checked={formData.transport.includes('plane')}
          onChange={handleChange}
        />
        Plane
      </label>
    </div>
    <div>
      <label htmlFor="nationality">Nationality:</label>
      <select
        id="nationality"
        name="nationality"
        value={formData.nationality}
        onChange={handleChange}
      >
        <option value="">Select nationality</option>
        <option value="india">India</option>
        <option value="canada">Canada</option>
        <option value="us">US</option>
        <option value="dubai">Dubai</option>
      </select>
    </div>
    <button type="submit">Submit</button>
  </form>
);
};

export default Form;

