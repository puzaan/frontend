import React, { useEffect, useState } from "react";
import { Button, Card, Col, Image, ListGroup, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../component/Rating";
import { useDispatch, useSelector } from 'react-redux'
import { listProductsDetails } from "../actions/productActions";
import Message from "../component/Message";
import Loader from "../component/Loder";



const ProductScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1)
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;




  useEffect(() => {
    dispatch(listProductsDetails(match.params.id))


  }, [dispatch, match.params.id]);


  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);

  }
  return (
    <>
      <Link className="btn btn-dark my-m" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : <Row>
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
                <Row>
                  <Col>Choose quantity:</Col>
                  <Col>
                  

                  <Form.Control
                    as="select"
                    value={product.qty}
                    onChange= {
                      (e) => {
                        setQty(Number(e.target.value))
                      }
                    }
                    >

                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Form.Control>
                  </Col>

                </Row>
              </ListGroup.Item>



              <ListGroup.Item>
                <Button
                  onClick={addToCartHandler}
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
