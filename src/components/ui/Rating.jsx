import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Rating = ({ rating }) => {
  const roundedRating = Math.round(rating);
  const hasHalfStar = !Number.isInteger(rating) && rating > 0;

  return (
    <div className="decor__ratings">
      {roundedRating > 0 &&
        new Array(roundedRating).fill(0).map((_, index) => (
          <FontAwesomeIcon icon="star" key={index} />
        ))}
      {hasHalfStar && <FontAwesomeIcon icon="star-half-alt" />}
    </div>
  );
};

export default Rating;
