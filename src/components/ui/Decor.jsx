import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Decor = ({ decor }) => {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = decor.url;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }
      }, 30);
    };
    return () => {
      mountedRef.current = false;
    };
  }, [decor.url]);

  return (
    <div className="decor">
      {!img ? (
            <>
                <div className="decor__img--skeleton"></div>
                <div className="decor__title--skeleton skeleton"></div>
                <div className="decor__rating--skeleton skeleton"></div>
                <div className="decor__price--skeleton skeleton"></div>
            </>
        ) : (
            <>
                <Link to={`/decors/${decor.id}`}>
                    <figure className="decor__img__wrapper">
                    <img src={img.src} alt="" className="decor__img" />
                    </figure>
                </Link>
                <div className="decor__title">
                    <Link to={`/decors/${decor.id}`} className="decor__title--link">
                        {decor.title}
                    </Link>
                </div>
                <Rating rating={decor.rating} />
                <Price
                    originalPrice={decor.originalPrice}
                    salePrice={decor.salePrice}
                />
            </>
        )}
    </div>
  );
};

export default Decor;
