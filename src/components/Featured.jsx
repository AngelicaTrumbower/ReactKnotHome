import React from 'react';
import Decor from './ui/Decor';
import { decors } from '../decors';

const Featured = () => {
    console.log(decors);

    return (
        <section id="featured">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Featured <span className="teal">Decors</span>
                    </h2>
                    <div className="decors">
                        {decors
                            .filter((decor) => decor.rating === 5)
                            .slice(0, 4)
                            .map((decor) => (
                            <Decor decor={decor} key={decor.id} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;
