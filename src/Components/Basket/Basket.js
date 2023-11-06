import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CustomCard from "./CustomCard";
import Checkout from "../Checkout/checkout";
import Footer from '../Footer';
import { Typography } from "@mui/material";

function Basket({ basket, removeFromBasket, updateBasketItem }) {
    const history = useHistory();

    // Function to navigate to the product details page
    const navigateToProductView = (url) => {
        history.push(url); // Use push to navigate to the specified URL
    }

    // Calculate the total price of items in the basket
    const totalPrice = basket.reduce((acc, value) => {
        const itemPrice = Number(value.price) * Number(value.quantity);
        return acc + itemPrice;
    }, 0);

    return (
        <>
            {/* Phase-1 */}
            {basket.length > 0 && (
                <div style={{ height: "100vh" }} className="card-bg">
                    <Typography variant="h5" className="fw-bold text-center ps-3 pt-3 pb-3" gutterBottom>
                        Your Cart Items
                    </Typography>

                    <Row className="">
                        {basket.map((product, idx) => (
                            <Col
                                sm={12}
                                md={12}
                        
                            >
                                <CustomCard
                                    {...{
                                        ...product,
                                        index: idx,
                                        updateBasketItem,
                                        removeFromBasket,
                                    }}
                                />
                            </Col>
                        ))}
                        <div className="text-center">
                            <Typography className="ps-lg-4" gutterBottom>
                                <h5 className="mt-3"><span className="fw-bold">Total:</span> <span className="fw-semibold">${totalPrice}</span></h5>
                            </Typography>

                            <div className="ps-lg-5 pe-lg-5">
                                <Checkout products={basket} />
                            </div>
                        </div>
                    </Row>
                </div>
            )}

            {/* Phase-2 */}
            {basket.length === 0 && (
                <div style={{ height: "100vh" }} className="card-bg">
                    <div className="text-center">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png" width="300px" alt="Empty Cart" />
                        <h3 className="text-capitalize">Your Cart is Empty !!!</h3>
                        <Button
                            className="card-bg-gold border-0 mt-3 text-uppercase"
                            size="md"
                            onClick={() => {
                                history.push("/products");
                            }}
                        >
                            Go for Shopping
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Basket;
