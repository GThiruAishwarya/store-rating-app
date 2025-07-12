// pages/UserDashboard.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const UserDashboard = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    api.get('/stores').then(res => setStores(res.data));
  }, []);

  return (
    <div className="dashboard">
      <h2>Browse Stores</h2>
      {stores.map(store => (
        <div key={store.id} className="store-card">
          <h3>{store.name}</h3>
          <p>{store.address}</p>
        </div>
      ))}
    </div>
  );
};

export default UserDashboard;
