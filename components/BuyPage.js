import React, { useState, useEffect } from "react";

import CartItem from "./CartItem";
import Data from "../Data"
import { Container, Col, Row } from "reactstrap";
import { v4 as uuidv4 } from 'uuid';


const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  const fetchPhotos = () => {
    
    const allProduct = Data.map((photo) => ({
      img:photo.img,
     title:photo.title,
     description:photo.description,
     price:photo.price,
      id: uuidv4()
    }));

    setProduct(allProduct);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Top Collection</h1>

      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
