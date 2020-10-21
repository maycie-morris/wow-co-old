import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css'
// import BackgroundSlider from 'react-background-slider'
import testbanner from '../../images/testbanner.png'
import image1 from '../../images/im1.png'
import image2 from '../../images/im2.png'
import image3 from '../../images/im3.png'
import image4 from '../../images/im4.png'
import image5 from '../../images/im5.png'
import image6 from '../../images/im6.png'


export const Home = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <>
        <div className="carousel">
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                interval={6000}
            >
                <div data-src={ testbanner } />
                <div data-src={ image1 } />
                <div data-src={ image2 } />
                <div data-src={ image3 } />
                <div data-src={ image4 } />
                <div data-src={ image5 } />
                <div data-src={ image6 } />
            </AutoplaySlider>
        </div>
            <h1 className='homeHeader'>Custom locally made products.</h1>
        </>
    )
}