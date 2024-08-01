import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Highlight from './ui/Highlight';

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why Choose <span className="teal">Knot & Home</span>?
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight 
                            icon={<FontAwesomeIcon icon="bolt" />} 
                            title="Fast Shipping"
                            para="Enjoy fast shipping on our home decor items, ensuring you receive your perfect pieces promptly to beautify your space without delay."
                        />
                        <Highlight 
                            icon={<FontAwesomeIcon icon="heart" />} 
                            title="Handcrafted"
                            para="Crafted from high-quality materials and showcasing meticulous attention to detail, our handmade home decor pieces bring elegance to any living space."
                        />
                        <Highlight 
                            icon={<FontAwesomeIcon icon="gift" />} 
                            title="Unique Design"
                            para="Discover our exclusive home decor creations, each uniquely designed to elevate your living spaces with  style and charm."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;