import React from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
    return (
        <section id="explore">
            <div className="container">
                <div className="row row__column">
                    <h2 id="explore__header--title">
                        Explore more <span className="teal">Decor</span>
                    </h2>
                    <Link to="/decors">
                        <button className="btn">Browse Books</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Explore