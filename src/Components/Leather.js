import React, { useState } from "react";
import { Button, Card, Col, Container, Row, Pagination } from "react-bootstrap";
import Header from './Header';
import img from '../Images/Leather.jpg';
import Footer from "./Footer";
import { Icon } from "@iconify/react";

function Leather() {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Leather Jacket",
            price: 149.99,
            comparePrice: 199.99,
            category: "Jackets",
            review: 4.5,
            inStock: true,
            image: "https://plus.unsplash.com/premium_photo-1661313817350-1fa759c43a3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fExlYXRoZXIlMjBKYWNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        },
        {
            id: 2,
            name: "Leather Belt",
            price: 149.99,
            comparePrice: 199.99,
            category: "Belts",
            review: 4.5,
            inStock: true,
            image: "https://images.unsplash.com/photo-1631160246898-58192f971b5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fExlYXRoZXIlMjBCZWx0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        },
        {
            id: 3,
            name: "Leather Shoes",
            price: 149.99,
            comparePrice: 199.99,
            category: "Shoes",
            review: 4.5,
            inStock: true,
            image: "https://images.unsplash.com/photo-1616406432452-07bc5938759d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGVhdGhlciUyMFNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        },
        {
            id: 4,
            name: "Leather Watches",
            price: 149.99,
            comparePrice: 199.99,
            category: "Watch",
            review: 4.5,
            inStock: true,
            image: "https://images.unsplash.com/photo-1557531365-e8b22d93dbd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8V2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        },
        {
            id: 1,
            name: "Leather Jacket",
            price: 149.99,
            comparePrice: 199.99,
            category: "Jackets",
            review: 4.5,
            inStock: true,
            image: "https://plus.unsplash.com/premium_photo-1661313817350-1fa759c43a3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fExlYXRoZXIlMjBKYWNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        },
        {
            id: 2,
            name: "Leather Belt",
            price: 149.99,
            comparePrice: 199.99,
            category: "Belts",
            review: 4.5,
            inStock: true,
            image: "https://images.unsplash.com/photo-1631160246898-58192f971b5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fExlYXRoZXIlMjBCZWx0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        },
        {
            id: 3,
            name: "Leather Shoes",
            price: 149.99,
            comparePrice: 199.99,
            category: "Shoes",
            review: 4.5,
            inStock: true,
            image: "https://images.unsplash.com/photo-1616406432452-07bc5938759d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGVhdGhlciUyMFNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        },
        {
            id: 4,
            name: "Leather Watches",
            price: 149.99,
            comparePrice: 199.99,
            category: "Watch",
            review: 4.5,
            inStock: true,
            image: "https://images.unsplash.com/photo-1557531365-e8b22d93dbd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8V2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        },
        {
            id: 1,
            name: "Leather Jacket",
            price: 149.99,
            comparePrice: 199.99,
            category: "Jackets",
            review: 4.5,
            inStock: true,
            image: "https://plus.unsplash.com/premium_photo-1661313817350-1fa759c43a3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fExlYXRoZXIlMjBKYWNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        },
        {
            id: 2,
            name: "Leather Belt",
            price: 149.99,
            comparePrice: 199.99,
            category: "Belts",
            review: 4.5,
            inStock: true,
            image: "https://images.unsplash.com/photo-1631160246898-58192f971b5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fExlYXRoZXIlMjBCZWx0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        },
        {
            id: 3,
            name: "Leather Shoes",
            price: 149.99,
            comparePrice: 199.99,
            category: "Shoes",
            review: 4.5,
            inStock: true,
            image: "https://images.unsplash.com/photo-1616406432452-07bc5938759d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGVhdGhlciUyMFNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        },
        {
            id: 4,
            name: "Leather Watches",
            price: 149.99,
            comparePrice: 199.99,
            category: "Watch",
            review: 4.5,
            inStock: true,
            image: "https://images.unsplash.com/photo-1557531365-e8b22d93dbd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8V2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        },
        
        // Add more products as needed
    ]);

    const productsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(products.length / productsPerPage);

    const handlePaginationClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Row>
                <Col lg={12}>
                    <Header />
                </Col>
                <Col lg={12} style={{ background: '#2f3841' }}>
                    <Container>
                        <Row>
                            {currentProducts.map((product) => (
                                <Col md={4} lg={3} key={product.id}>
                                    <Card className="shadow m-2">
                                        <Card.Header className="bg-white">
                                            <div className="d-flex gap-2 justify-content-end">
                                                <Button size="sm" className="bg-transparent border-dark">
                                                    <Icon icon="fluent:cart-24-filled" color="black" width="24" height="24" hFlip={true} />
                                                </Button>
                                                <Button size="sm" className="bg-transparent border-dark">
                                                    <Icon icon="basil:heart-solid" color="black" width="24" height="24" />
                                                </Button>
                                            </div>
                                        </Card.Header>
                                        <div className="card-img-top">
                                            <img src={product.image} alt={product.name} className="carousel-image" />
                                        </div>
                                        <div className="card-body">
                                            <span style={{ fontSize: '22px' }} className="fw-semibold d-block">{product.name}</span>
                                            <span style={{ fontSize: '18px' }} className="fw-semibold d-block">${product.price.toFixed(2)}
                                                <del className="ms-2" style={{ fontSize: '12px' }}>${product.comparePrice.toFixed(2)}</del>
                                            </span>
                                            <span style={{ fontSize: '16px' }} className="fw-semibold d-block">{product.category}</span>
                                            <span style={{ fontSize: '14px' }} className="fw-semibold d-block">Rating:<Icon icon="iconamoon:star-fill" style={{marginTop:"-5px",marginLeft:'5px',marginRight:'3px'}} color="#ffa41c" width="16" height="16" />{product.review}</span>
                                            <span className={`badge ${product.inStock ? 'bg-success' : 'bg-danger'}`}>
                                                {product.inStock ? 'In Stock' : 'Out of Stock'}
                                            </span>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center mt-4">
                                <Pagination>
                                    {Array.from({ length: totalPages }, (_, index) => (
                                        <Pagination.Item
                                            key={index + 1}
                                            active={index + 1 === currentPage}
                                            onClick={() => handlePaginationClick(index + 1)}
                                        >
                                            {index + 1}
                                        </Pagination.Item>
                                    ))}
                                </Pagination>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col lg={12}>
                    <Footer />
                </Col>
            </Row>
        </>
    );
}

export default Leather;
