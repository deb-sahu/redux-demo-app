import React, { useEffect, useState } from 'react';
import { generateUniqueId } from '../utils/generateUniqueId';
import { useAppDispatch } from '../store/store';
import { addEmployee } from '../store/slice/employeeSlice';

interface FormValues {
  name: string;
  email: string;
}

export const Form = () => {
  const [formData, setFormData] = useState<FormValues>({ name: '', email: '' });
  const dispatch = useAppDispatch(); // Get the dispatch function

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    const id = generateUniqueId(); // Function to generate unique IDs
    dispatch(addEmployee({id: id, name:formData.name, email: formData.email})); // Dispatch the addEmployee action with the merged data
    setFormData({ name: '', email: '' }); // Reset the form data
  };

  return (
    <div className='container-xl'>
      <div className='d-flex flex-column col-12 col-lg-6'>
          <h2>Hi There!</h2>
          <p>Welcome, Enter your details</p>
      </div>
      <form onSubmit={handleSubmit}>
      <div className='d-flex flex-column col-12 col-lg-6'>
        <div className='d-flex flex-row mt-5' style={{gap:'1em'}}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
        </div>
        <div className='d-flex flex-row mt-4' style={{gap:'1.12em'}}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
        </div>
        <div className='d-flex flex-row mt-4 justify-content-center'>
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    </div>
      </form>
    </div>
  );
};
