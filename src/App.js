import './App.scss';
import { useState, useEffect } from 'react';
import fetchOrders from './Utils.js/fetchOrder.js'
import OrderTable from './Components/OrderTable';
import ModalSubmit from './Components/ModalSubmit';
import ModalDelete from './Components/ModalDelete';
import { Container, Row, Col, Navbar, Nav} from 'react-bootstrap';




function App() {
  const [orders,setOrders] = useState([]);
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [currentOrder, setCurrentOrder] = useState(false)
  useEffect(()=>{
    fetchOrders(setOrders)
  },[show,show2])
  console.log(orders,show)
  return (

    <Container fluid="sm">
      <ModalSubmit show={show} setShow={setShow} />
      <ModalDelete show={show2} setShow={setShow2} currentOrder={currentOrder} setCurrentOrder={setCurrentOrder} />
      <Row>
      <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand>Technical Assessment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link onClick={() => {setShow(true)}}>Submit Order</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={9}><OrderTable orders={orders} setCurrentOrder={setCurrentOrder} setShow={setShow2}/></Col>
        <Col></Col>
      
      </Row>
    </Container>
  );
}

export default App;
