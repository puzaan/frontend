import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from './screens/CartScreen'
import { BrowserRouter as Router, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
