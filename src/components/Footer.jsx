import React from 'react';
import Logo from "../assests/logo.jpg"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className="footer__logo">
                            <img src={Logo} className="footer__logo--img" alt=""/>
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className="footer__link">Home</Link>
                        <Link to="/decors" className="footer__link">Decor</Link>
                        <Link to="/cart" className="footer__link">Cart</Link>
                    </div>
                    <div className="footer__copyright">Copyright &copy; 2024 Knot & Home</div>
                </div>
            </div>
        </footer>  
    )
}

export default Footer