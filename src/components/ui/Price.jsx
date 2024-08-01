import React from "react";

const Price = ({ originalPrice, salePrice }) => {
  return (
    <div className="decor__price">
      {salePrice ? (
        <>
          <span className="decor__price--normal">
            ${originalPrice.toFixed(2)}
          </span>
          ${salePrice.toFixed(2)}
        </>
      ) : (
        <>${originalPrice.toFixed(2)}</>
      )}
    </div>
  );
};

export default Price;
