import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

export default function DisplayForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    remarks: '',
  });

  const submitData = async (event) => {
    event.preventDefault(); // Prevent form submission

    try {
      const response = await axios.post('api/storeData', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
 

    <div className="container text-center">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Registration Form
          </a>
          </div>
      </nav>
      <div className="row align-items-center">
      <div className="card">
    <div className="card-body">
        <form onSubmit={submitData} method="POST">
          <label htmlFor="name" class="form-label">Name</label><br />
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email" className="form-label">Email</label><br />
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="contact" className="form-label">Contact</label><br />
          <input
            type="number"
            id="contact"
            name="contact"
            className="form-control"
            value={formData.contact}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="remarks" className="form-label">Remarks</label><br />
          <input
            type="text"
            id="remarks"
            name="remarks"
            className="form-control"
            value={formData.remarks}
            onChange={handleInputChange}
            required
          />

          <br />
          <div>
            <button type="submit" className="btn btn-primary mb-3">Submit</button>
          </div>
        </form>
        </div>
      </div>
      </div>
    </div>
  
  );
}

const domNode = document.getElementById('DisplayForm');
const root = createRoot(domNode);

root.render(<DisplayForm />);
