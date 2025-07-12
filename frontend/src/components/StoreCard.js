// components/StoreCard.js
import React from 'react';
import RatingStars from './RatingStars';

const StoreCard = ({ store, onRate, userRating }) => (
  <div className="store-card">
    <h3>{store.name}</h3>
    <p>{store.address}</p>
    <p>Overall Rating: {store.averageRating || 'N/A'}</p>
    <RatingStars rating={userRating || 0} onRate={rate => onRate(store.id, rate)} />
  </div>
);

export default StoreCard;
