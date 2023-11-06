import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './IdolsCollection.css'; // You can create your own CSS for styling

import { Container, Row, Col, Card } from 'react-bootstrap';
import Slider from 'react-slick';

const IdolsCollection = () => {
    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    };

    const products = [
        {
            id: 1,
            name: "Brass Idols",
            price: 39.99,
            description: "This is the third product.",
            image: "https://media.istockphoto.com/id/1419372124/photo/bronze-idols.webp?b=1&s=170667a&w=0&k=20&c=KAtdcUQ0XcynxrDzQVL7G7_Z-zaEBh6KVGPYqCuMHjk="
        },
        ,
        {
            id: 2,
            name: "Brass Idols",
            price: 39.99,
            description: "This is the third product.",
            image: "https://media.istockphoto.com/id/1419372124/photo/bronze-idols.webp?b=1&s=170667a&w=0&k=20&c=KAtdcUQ0XcynxrDzQVL7G7_Z-zaEBh6KVGPYqCuMHjk="
        },
        {
            id: 3,
            name: "Brass Idols",
            price: 39.99,
            description: "This is the third product.",
            image: "https://media.istockphoto.com/id/1419372124/photo/bronze-idols.webp?b=1&s=170667a&w=0&k=20&c=KAtdcUQ0XcynxrDzQVL7G7_Z-zaEBh6KVGPYqCuMHjk="
        },
        {
            id: 4,
            name: "Brass Idols",
            price: 39.99,
            description: "This is the third product.",
            image: "https://media.istockphoto.com/id/1419372124/photo/bronze-idols.webp?b=1&s=170667a&w=0&k=20&c=KAtdcUQ0XcynxrDzQVL7G7_Z-zaEBh6KVGPYqCuMHjk="
        },
        
    ];

    return (
        <>
            <div style={{background:'#2f3841'}}>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='text-white text-center mt-3'>Idols Collection</h1>
                            <Slider {...carouselSettings}>
                                {products.map(products => (
                                    <div key={products.id} className="image-container">
                                        <div class="card ms-2 me-2 mt-3 mb-3 bg-dark overflow-hidden">
                                            <div class="card-img-top">
                                                <img src={products.image} alt={`Slide ${products.id}`} className="carousel-image" />
                                            </div>
                                            <div class="card-body">
                                                <h5 className='text-white'>{products.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default IdolsCollection;
