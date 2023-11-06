import React from "react"
import { Card, Form } from "react-bootstrap"
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


const CustomCard = ({
    id,
    name,
    size,
    sizes,
    quantity,
    quantities,
    imageUrl,
    basketItemId,
    productId,
    price,
    color,
    index,
    updateBasketItem,
    removeFromBasket
}) => {

    const quantitiesArray = Array.from(Array(Number(quantities || 0)).keys());

    return (
        <>
            <div className="d-flex  justify-content-center">
                <table>
                    <div className="mt-md-3">
                            <tr className="cart-table-head text-center">
                                <th className=" text-white">Product Image</th>
                                <th className="text-white">Product Name</th>
                                <th className="text-white">Quantity</th>
                                <th className=" text-white">Price</th>
                                <th className=" text-white">Action</th>
                            </tr>
                        <tr className="cart-item">
                            <td className="ps-2 pb-3 ps-xl-5 pe-xl-5 pe-3">
                                <img alt={name} width="50px" className="mt-3 cursor-pointer bg-white rounded-circle" src={`http://localhost:1337${imageUrl}`} />
                            </td>
                            <td className="ps-md-3 prd-name-cart ps-xl-5 pe-xl-5  mb-3 pe-md-3">
                                <ListItemText

                                    primary={
                                        <span
                                           
                                            className=" cursor-pointer gold-txt text-uppercase"
                                        >
                                            {name}
                                        </span>}
                                    secondary={
                                        <>
                                            <Card.Subtitle className="d-block d-md-none" onClick={(e) => e.stopPropagation()}>
                                                <Form>
                                                    <Form.Group>
                                                        <Form.Select
                                                            size="sm"
                                                            value={quantity}
                                                            type="select"
                                                            name="quantity"
                                                            id="exampleSelect1"
                                                            style={{ width: "100px" }}
                                                            onChange={({ target: { value } }) => {
                                                                if (value) {
                                                                    updateBasketItem({
                                                                        index,
                                                                        color,
                                                                        size,
                                                                        imageUrl,
                                                                        productId,
                                                                        basketItemId: id,
                                                                        quantity: Number(value),
                                                                    });
                                                                }
                                                            }}
                                                            className="mt-2"
                                                        >
                                                            {quantitiesArray.map((number) => (
                                                                <option key={number}>{number}</option>
                                                            ))}
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Form>
                                            </Card.Subtitle>
                                        </>
                                    }
                                />
                            </td>
                            <td className="ps-xl-5 pe-xl-5  ps-md-3 pe-md-3">

                                <div className="">
                                    <Card.Subtitle className="d-none d-md-block" onClick={(e) => e.stopPropagation()}>
                                        <Form>
                                            <Form.Group>
                                                <Form.Select
                                                    size="sm"
                                                    value={quantity}
                                                    type="select"
                                                    name="quantity"
                                                    id="exampleSelect1"
                                                    style={{ width: "100px" }}
                                                    onChange={({ target: { value } }) => {
                                                        if (value) {
                                                            updateBasketItem({
                                                                index,
                                                                color,
                                                                size,
                                                                imageUrl,
                                                                productId,
                                                                basketItemId: id,
                                                                quantity: Number(value),
                                                            });
                                                        }
                                                    }}
                                                    className="mt-2"
                                                >
                                                    {quantitiesArray.map((number) => (
                                                        <option key={number}>{number}</option>
                                                    ))}
                                                </Form.Select>
                                            </Form.Group>
                                        </Form>
                                    </Card.Subtitle>
                                </div>
                            </td>
                            <td className="ps-xl-5 pe-xl-5  ps-md-3 pe-md-3">

                                <Typography className="" variant="h6">
                                    ${price}
                                </Typography>
                            </td>
                            <td className="ps-xl-5 pe-xl-5  ps-md-3 pe-md-3">

                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeFromBasket({
                                            basketItemId: id,
                                            productId,
                                            price,
                                            color,
                                            index,
                                            quantity
                                        });
                                    }}
                                >
                                    <DeleteIcon className="cursor-pointer text-white" />
                                </IconButton>
                            </td>
                        </tr>
                    </div>
                </table>
            </div>

        </>
    )
}
export default CustomCard