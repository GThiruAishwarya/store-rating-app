// pages/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const AdminDashboard = () => {
  const [stats, setStats] = useState({ users: 0, stores: 0, ratings: 0 });
  const [users, setUsers] = useState([]);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    api.get('/users').then(res => setUsers(res.data));
    api.get('/stores').then(res => setStores(res.data));
    api.get('/ratings').then(res => setStats({ users: users.length, stores: stores.length, ratings: res.data.length }));
  }, []);

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <p>Total Users: {stats.users}</p>
      <p>Total Stores: {stats.stores}</p>
      <p>Total Ratings: {stats.ratings}</p>
    </div>
  );
};

export default AdminDashboard;
