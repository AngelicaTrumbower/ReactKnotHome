import React from 'react';
import { decors } from '../decors';
import Decor from './ui/Decor'

const Discounted = () => {
    return (
        <section id="new-arrival">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        New <span className="teal">Arrivals</span>
                    </h2>
                    <div className="decors">
                       {decors
                        .filter(decor => decor.salePrice > 0)
                        .slice(0, 8)
                        .map(decor => (
                        <Decor decor={decor} key={decor.id} />
                       ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discounted