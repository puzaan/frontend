import { Col, Row } from "react-bootstrap";
import Product from "../component/Product";
import { listProducts } from "../actions/productActions.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loader from "../component/Loder";
import Message from "../component/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {loading ? (
          <Loader/>
        ) : error ? (
          <Message variant = "danger">{error}</Message>
        ) : (
          products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))
        )}
      </Row>
    </>
  );
};

export default HomeScreen;
