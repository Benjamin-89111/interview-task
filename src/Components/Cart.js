import React, { useState } from 'react';

import {
    Container,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    IconButton,
    Button,
    Grid,
    Box,
    ListItemSecondaryAction,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Header from './Header';
import Footer from './Footer';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './Cart.css'; // Import your CSS file for styling

const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 20,
        image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 2,
        name: 'Product 2',
        price: 30,
        image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 25,
        image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 4,
        name: 'Product 4',
        price: 100,
        image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
];

const Cart = () => {
    const [cartItems, setCartItems] = useState(products.map((product) => ({ ...product, quantity: 1 })));
    const [addedToCart, setAddedToCart] = useState(false);

    const handleRemoveItem = (itemId) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
    };

    const handleQuantityChange = (itemId, value) => {
        const updatedCart = cartItems.map((item) =>
            item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity + value) } : item
        );
        setCartItems(updatedCart);
    };

    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleCheckout = () => {
        // Add your checkout logic here
        // For example, redirect to a checkout page
        // or show a confirmation message.
        setAddedToCart(true);
    };

    return (
        <>
            <Row className='card-bg text-white'>
                {/* <Col lg={12}>
                    <Header />
                </Col> */}
                <Col lg={12} style={{ height: "auto" }}>
                    <Container>
                        <Typography variant="h5" className="fw-bold mt-2" gutterBottom>
                            Shopping Cart
                        </Typography>
                        {cartItems.length === 0 ? (
                            <div className="empty-cart">
                                <Typography variant="h6">Your Cart Is Empty</Typography>
                                <img src="empty-cart-image.jpg" alt="Empty Cart" />
                            </div>
                        ) : (
                            <List>
                                {cartItems.map((item) => (
                                    <ListItem key={item.id} className="cart-item">
                                        <ListItemAvatar>
                                            <Avatar alt={item.name} src={item.image} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={item.name}
                                            secondary={<span className='text-white'>Price: {item.price} each</span>}
                                        />
                                        <Grid container alignItems="center">
                                            <IconButton
                                            className='text-white'
                                                aria-label="decrease quantity"
                                                onClick={() => handleQuantityChange(item.id, -1)}
                                            >
                                                <RemoveIcon />
                                            </IconButton>
                                            <Box>{item.quantity}</Box>
                                            <IconButton
                                            className='text-white'
                                                aria-label="increase quantity"
                                                onClick={() => handleQuantityChange(item.id, 1)}
                                            >
                                                <AddIcon />
                                            </IconButton>
                                        </Grid>
                                        <Typography variant="h6">
                                            Total: ${item.price * item.quantity}
                                        </Typography>
                                        <ListItemSecondaryAction>
                                            <IconButton
                                                edge="end"
                                                aria-label="delete"
                                                onClick={() => handleRemoveItem(item.id)}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                ))}
                            </List>
                        )}
                        <Typography variant="h5" gutterBottom>
                            Total: ${totalAmount}
                        </Typography>
                        {cartItems.length > 0 && (
                            <Link to="/Checkout">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleCheckout}
                                    className={`checkout-button mb-3 ${addedToCart ? 'fade-out' : ''}`}
                                >
                                    checkout
                                </Button>
                            </Link>
                        )}
                    </Container>
                </Col>
                <Col lg={12}>
                    <Footer />
                </Col>
            </Row>
        </>
    );
};

export default Cart;
