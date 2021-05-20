import React, { useEffect } from "react";
import { Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartAction";
import Message from "../component/Message";

const CartScreen = ({ match }) => {
    const productId = match.params.id;
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const { cartItems } = cart;
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, 2));
        }
    }, [dispatch, productId]);

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message>
                        Your cart is Empty
                        <Link to="/">Go Back</Link>
                    </Message>
                ) : (
                    <ListGroup variant="flush">
                        {cartItems.map((item) => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image
                                            src={item.image}
                                            lat={item.name}
                                            fluid
                                            roundedCircle
                                        ></Image>
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}> {item.name}</Link>
                                    </Col>
                                    <Col md={2}> ${item.price}</Col>
                                    <Col md={2}>
                                        <Form.Control
                                            as="Select"
                                            value={item.qty}
                                            onChange={(e) =>
                                                dispatch(
                                                    addToCart(item.product, Number(e.target.value))
                                                )
                                            }
                                        >
                                            {item.qty}

                                            {[...Array(item.countInStock).keys()].map((x) => {
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>;
                                            })}
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
        </Row>
    );
};

export default CartScreen;
