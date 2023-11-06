import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './KidsCollection.css'; // You can create your own CSS for styling

import { Container, Row, Col, Card } from 'react-bootstrap';
import Slider from 'react-slick';

const KidsCollection = () => {
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
            name: "Kids Clothing",
            price: 39.99,
            description: "This is the third product.",
            image: "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8S2lkcyUyMENsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        },
        {
            id: 2,
            name: "Kids Footwear",
            price: 29.99,
            description: "This is the second product.",
            image: "https://images.unsplash.com/photo-1517236703105-9ec38fec32a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhYnklMjBraWRzJTIwZm9vdHdlYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        },
        {
            id: 3,
            name: "Toys",
            price: 19.99,
            description: "This is the first product.",
            image: "https://images.unsplash.com/photo-1599623560574-39d485900c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEtpZHMlMjBUb3lzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
        },
        {
            id: 4,
            name: "Baby Care",
            price: 19.99,
            description: "This is the first product.",
            image: "https://images.unsplash.com/photo-1613731587985-ea81ea4b3bdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFieSUyMFdpcGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
        },
        // {
        //     id: 5,
        //     name: "Feature Brands",
        //     price: 19.99,
        //     description: "This is the first product.",
        //     image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW5zJTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
        // },
    ];

    return (
        <>
            <div style={{ background: '#2f3841' }}>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='text-white text-center mt-3'>Kids Collection</h1>
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

export default KidsCollection;
