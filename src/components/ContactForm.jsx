import React, { useState } from 'react';
import './styles.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Number</label>
          <input
            type="tel"
            name="number"
            placeholder="Enter phone number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Add Contact</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
