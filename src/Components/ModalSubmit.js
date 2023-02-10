import { Modal, Button , Form } from "react-bootstrap"
import CurrencyInput from 'react-currency-input-field';
import { useState } from "react";
import rewardCalculator from "../Utils.js/rewardCalculator";
import axios from "axios";

function ModalSubmit(props){
    const [amount, setAmount] = useState(0)
    const [orderId, setOrderId] = useState(''),
        onInput = ({target:{value}}) => setOrderId(value)
    return(
        <Modal show={props.show} onHide={()=> props.setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Order Submission</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formOrderId">
                        <Form.Label>Order Id</Form.Label>
                        <Form.Control onChange={onInput}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAmount">
                        <Form.Label>Order Amount </Form.Label>
                        <CurrencyInput className="form-control"
                            defaultValue={0}
                            decimalsLimit={2}
                            onValueChange={(value, name) => setAmount(value)}
                        />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={()=> props.setShow(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={() =>{
                    const rewardPoints = rewardCalculator(amount)
                    const submission = {orderId,amount,'reward points': rewardPoints}
                    axios.post(process.env.REACT_APP_API_URL_SUBMIT, submission)
                        .then(res => props.setShow(false))
                        .catch(err => console.log(err))
                }}>
                    Submit Order
                </Button>
            </Modal.Footer>
        </Modal>
        )
    }
    
export default ModalSubmit