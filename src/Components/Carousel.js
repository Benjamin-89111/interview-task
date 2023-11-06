import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

const ImageCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
        >
            <div className=''>
                <img src="https://www.indiaproduced.com/cdn/shop/files/website_banner_design_indiaproduced_brass_1800x.jpg?v=1651060922" width="100%" />
            </div>
            <div className=' cta-2'>
                <img src='https://www.indiaproduced.com/cdn/shop/files/E-comers_website_banner_indiaproduced_1800x.jpg?v=1641962603' width="100%" />
            </div>
            <div className=' cta-3'>
                <img src='https://www.indiaproduced.com/cdn/shop/files/banner_uk_2_india_02_1800x.jpg?v=1641963883' width="100%" />
            </div>
        </Carousel >
    );
};

export default ImageCarousel;
