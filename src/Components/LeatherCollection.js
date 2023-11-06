import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './LeatherCollection.css'; // You can create your own CSS for styling

import { Container, Row, Col, Card } from 'react-bootstrap';
import Slider from 'react-slick';

const LeatherCollection = () => {
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
            name: "Leather Belts",
            price: 39.99,
            description: "This is the third product.",
            image: "https://images.unsplash.com/photo-1664286074240-d7059e004dff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fExlYXRoZXIlMjBCZWx0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
        },
        {
            id: 2,
            name: "Leather Shoes",
            price: 29.99,
            description: "This is the second product.",
            image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGVhdGhlciUyMFNob2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
        },
        {
            id: 3,
            name: "Leather Watches",
            price: 19.99,
            description: "This is the first product.",
            image: "https://plus.unsplash.com/premium_photo-1682097578070-901d10cabc5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGVhdGhlciUyMFdhdGNoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
        },
        {
            id: 4,
            name: "Leather Wallets",
            price: 19.99,
            description: "This is the first product.",
            image: "https://images.unsplash.com/photo-1556551999-7efff4f05f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fExlYXRoZXIlMjBXYWxsZXRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
        },
    ];

    return (
        <>
            <div style={{background:'#2f3841'}}>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='text-white text-center mt-3'>Leather Collection</h1>
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

export default LeatherCollection;
