import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import im1 from '../../images/im1.png'
import im2 from '../../images/im2.png'
import im3 from '../../images/im3.png'
import im4 from '../../images/im4.png'
import im5 from '../../images/im5.png'
import im6 from '../../images/im6.png'

export const CarouselComponent = () => {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop autoPlay='1000'>
                <div>
                    <img src={ im1 } />
                </div>
                <div>
                    <img src={ im2 } />
                </div>
                <div>
                    <img src={ im3 } />
                </div>
                <div>
                    <img src={ im4 } />
                </div>
                <div>
                    <img src={ im5 } />
                </div>
                <div>
                    <img src={ im6 } />
                </div>
            </Carousel>
        </div>
    );
}