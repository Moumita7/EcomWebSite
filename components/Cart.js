import Modal from 'react-modal';

import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Col,
  Row
} from "reactstrap";
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;

  cartItem.forEach(item => {
    amount = parseFloat(amount) + parseFloat(item.price);
  });

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#5A20CB';
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <Container fluid className="cart">
      <h1 className="text-success">Your Cart</h1>
      <ListGroup>
        {cartItem.map(item => (
          <ListGroupItem key={item.id}>
            <Row >
              <Col>
               
                <img height={80} src={item.img} alt="" />
              
              </Col>
              <Col className="text-center card ">
                <div className="text-primary">{item.title}</div>
                <span>price :- {item.price}</span>
                <Button color="danger" onClick={() => removeItem(item)}>
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {cartItem.length >= 1 ?( 
        <Card className="text-center mt-3">
          <CardHeader>Grand Total</CardHeader>
          <CardBody>
            Your amount for {cartItem.length} product is {amount}
          </CardBody>
          <CardFooter>
            <Button color="success" onSubmit={buyNow } onClick={openModal}>
              pay here
            </Button>
            <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      ><h1 className="text-success">Purchase complete</h1>
      <h2><h1 className="text-warning">Cart is empty</h1></h2></Modal>
          </CardFooter>
        </Card>
       ):(
        {/* <h1>k</h1> */}
        )} 
    </Container>
  );
};

export default Cart;
