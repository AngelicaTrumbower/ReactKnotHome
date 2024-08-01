import React from'react';
import Decor from '../components/ui/Decor';
import { useState } from 'react';


const Decors = ({ decors: initalDecors }) => {
    const [decors, setDecors] = useState(initalDecors); 
        
    function filterDecors(filter) {
        if(filter === 'LOW_TO_HIGH') {
            setDecors(decors.slice().sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)));
        }
        if (filter === "HIGH_TO_LOW") {
            setDecors(decors.slice().sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)));
        }
        if (filter === "RATING") {
            setDecors(decors.slice().sort((a, b) => b.rating - a.rating))
        };
        
    };
    return (
        <div id="decors__body">
            <main id="decors__main">
                <section>
                    <div className="decors__container">
                        <div className="row">
                            <div className="decors__header">
                                <h2 className="section__title decors__header--title">All Decor</h2>
                                <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterDecors(event.target.value)}>
                                    <option value="DEFAULT" disabled >Sort</option>
                                    <option value="LOW_TO_HIGH">Price: Low to High</option>
                                    <option value="HIGH_TO_LOW">Price: High to Low</option>
                                    <option value="RATING">Rating</option>
                                </select>
                            </div>
                            <div className="decors">
                                {
                                    decors.map((decor) => (
                                        <Decor decor={decor} key={decor.id} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Decors