// components/UserForm.js
import React from 'react';

const UserForm = ({ formData, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} className="user-form">
    <input
      name="name"
      placeholder="Name"
      value={formData.name}
      onChange={onChange}
      required
    />
    <input
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={onChange}
      required
    />
    <input
      name="address"
      placeholder="Address"
      value={formData.address}
      onChange={onChange}
      required
    />
    <input
      name="password"
      type="password"
      placeholder="Password"
      value={formData.password}
      onChange={onChange}
      required
    />
    <button type="submit">Submit</button>
  </form>
);

export default UserForm;
