import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/ui/Rating';
import Price from '../components/ui/Price';
import Decor from '../components/ui/Decor';

const DecorInfo = ({ decors, addToCart, cart }) => {
    const { id } = useParams();
    const decor = decors.find(decor => +decor.id === +id);
   

    function addDecorToCart(decor) {
        addToCart(decor);
    }

    function decorExistsInCart() {
        return cart.find(decor => decor.id === +id)
    }

    return (
        <div className="decors__body">
            <main id="decors__main">
                <div className="decors__container">
                    <div className="row">
                        <div className="decor__selected--top">
                            <Link to="/decors" className="decor__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/decors" className="decor__link">
                                <h2 className="decor__selected--title--top">Decors</h2>
                            </Link>
                        </div>
                        <div className="decor__selected">
                            <figure className="decor__selected--figure">
                                <img src={decor.url} alt="" className="decor__selected--img" />
                            </figure>
                            <div className="decor__selected--description">
                                <h2 className="decor__selected--title">{decor.title}</h2>
                                <Rating rating={decor.rating} />
                                <div className="decor__price">
                                    <Price originalPrice={decor.originalPrice} salePrice={decor.salePrice}/>
                                </div>
                                <div className="decor__summary">
                                    <div className="decor__summary--title">Summary</div>
                                    <p className="decor__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vero blanditiis magnam perspiciatis non rem odio magni, possimus distinctio voluptate quasi, a, aperiam neque eius excepturi. Ducimus, laudantium officia! Nesciunt.
                                    </p>
                                    <p className="decor__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vero blanditiis magnam perspiciatis non rem odio magni, possimus distinctio voluptate quasi, a, aperiam neque eius excepturi. Ducimus, laudantium officia! Nesciunt.
                                    </p>
                                </div>
                                {decorExistsInCart() ? (
                                    <Link to={`/cart`} className="decor__link"><button className="btn">Checkout</button> </Link>
                                ) : (
                                    <button className="btn" onClick={() => addDecorToCart(decor)}>Add to Cart</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="decors__container">
                    <div className="row">
                        <div className="decor__seleted--top">
                            <h2 className="decor__selected--title--top">
                                Recommended Decors
                            </h2>
                        </div>
                        <div className="decors">
                            {decors
                                .filter(decor => decor.rating === 5 && +decor.id !== +id)
                                .slice(0, 4)
                                .map(decor => <Decor decor={decor} key={decor.id} />)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default DecorInfo