import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../component/Rating";
import {useDispatch, useSelector } from 'react-redux'
import { listProductsDetails } from "../actions/productActions";
import Message from "../component/Message";
import Loader from "../component/Loder";



const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;


  //const [product, setProduct] = useState({});

  useEffect(() => {
    dispatch(listProductsDetails(match.params.id))
    
    
  }, [dispatch, match.params.id]);
  return (
    <>
      <Link className="btn btn-dark my-m" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader/>
      ) : error ?(
        <Message variant = "danger">{error}</Message>
      ) :<Row>
      <Col md={6}>
        <Card>
          <Image src={product.image} alt={product.name}></Image>
        </Card>
      </Col>
      <Col md={3}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h3>{product.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item variant="flush">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color="red"
            ></Rating>
          </ListGroup.Item>
          Pricr : ${product.price}
          <ListGroup.Item></ListGroup.Item>
          Description : ${product.description}
          <ListGroup.Item></ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  <strong>
                    {product.countInStock > 0 ? "In stock" : "Out of stock"}
                  </strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                className="btn-block"
                type="button"
                disabled={product.countInStock === 0}
              >
                Add to card
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  }
      
    </>
  );
}

export default ProductScreen;
