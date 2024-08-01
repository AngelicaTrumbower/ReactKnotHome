import React from "react";
import EmptyCart from "../assests/empty_cart.svg"
import { Link } from "react-router-dom";

const Cart = ({ cart, changeQuantity, removeItem }) => {
    const total = () => {
        let price = 0;
        cart.forEach((item) => {
            price += +(item.salePrice || item.originalPrice) * item.quantity
        });
        return price;
    };
    
  return (
    <div id="decors__body">
      <main id="decors__main">
        <div className="decors__container">
          <div className="row">
            <div className="decor__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__decor">Decor</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((decor) => {
                  return (
                    <div className="cart__item">
                      <div className="cart__decor">
                        <img
                          src={decor.url}
                          className="cart__decor--img"
                          alt=""
                        />
                        <div className="cart__decor--info">
                          <span className="cart__decor--title">
                            {decor.title}
                          </span>
                          <span className="cart__decor--price">
                            $
                            {(decor.salePrice || decor.originalPrice).toFixed(
                              2
                            )}
                          </span>
                          <button className="cart__decor--remove" onClick={() => removeItem(decor)}>
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          className="cart__input"
                          value={decor.quantity}
                          onChange={(event) =>
                            changeQuantity(decor, event.target.value)
                          }
                        />
                      </div>
                      <div className="cart__total">
                        $
                        {((decor.salePrice || decor.originalPrice) *
                          decor.quantity).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
              {cart.length ===0 && (
                <div className="cart__empty">
                    <img src={EmptyCart} alt="" className="cart__empty--img"/>
                    <h2>Your cart is empty!</h2>
                    <Link to="/decors">
                        <button className="btn">Shop Decor</button>
                    </Link>
                </div>
               )}
            </div>
            {cart.length > 0 && (
                <div className="total">
                    <div className="total__item total__sub-total">
                        <span>Subtotal:</span>
                        <span>${(total() * 0.9).toFixed(2)}</span>
                    </div>
                    <div className="total__item total__tax">
                        <span>Tax:</span>
                        <span>${(total() * 0.1).toFixed(2)}</span>
                    </div>
                    <div className="total__item total__total">
                        <span>Total:</span>
                        <span>${(total()).toFixed(2)}</span>
                    </div>
                    <button
                        className="btn btn__checkout no-cursor"
                        onClick={() => alert(`functionality not yet implemented`)}
                    >Proceed to checkout
                    </button>
                </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
