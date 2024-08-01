import React from 'react';
import UndrawDesign from '../assests/undraw_interior_design_re_7mvn.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <section id="landing">
            <div className="header__container">
                <div className="header__description">
                    <h1>Elevate Your Space with Handmade Macrame Home Decor</h1>
                    <h2>Uncover Your Dream Decor in Our Macrame <span className="teal">Store</span></h2>
                    <Link to="/decors">
                        <button className="btn">Browse Decor</button>
                    </Link>
                </div>
                <figure className="header__img--wrapper">
                    <img src={UndrawDesign} alt="" />
                </figure>
            </div>
        </section>
    );
}

export default Landing;