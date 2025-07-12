// pages/StoreOwnerDashboard.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const StoreOwnerDashboard = () => {
  const [storeData, setStoreData] = useState({ ratings: [], average: 0 });

  useEffect(() => {
    api.get('/stores/owner/ratings').then(res => setStoreData(res.data));
  }, []);

  return (
    <div className="dashboard">
      <h2>Your Store Ratings</h2>
      <p>Average Rating: {storeData.average}</p>
      <ul>
        {storeData.ratings?.map((r, index) => (
          <li key={index}>Rating: {r}</li>
        ))}
      </ul>
    </div>
  );
};

export default StoreOwnerDashboard;
