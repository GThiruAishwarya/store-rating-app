// components/RatingStars.js
import React from 'react';

const RatingStars = ({ rating, onRate }) => {
  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map(num => (
        <span
          key={num}
          style={{ color: num <= rating ? 'gold' : 'gray', cursor: 'pointer' }}
          onClick={() => onRate(num)}>
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
