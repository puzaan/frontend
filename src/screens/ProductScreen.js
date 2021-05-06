import axios from "axios";
import React, {useState, useEffect} from "react";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../component/Rating";
//import products from "../products";

function ProductScreen({ match }) {
  //const product = products.find((p) => p._id === match.params.id);

const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`http://localhost:5000/api/products/${match.params.id}`);
      const data = res.data;
      console.log(data);
      setProduct(data);
      
    };
    fetchProduct();

  }, [match.params.id]);
  return (
    <>
      <Link className="btn btn-dark my-m" to="/">
        Go Back
      </Link>
      <Row>
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
    </>
  );
}

export default ProductScreen;
